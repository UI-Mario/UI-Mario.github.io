不知道什么时候起，被灌输了setInterval不好的概念，但本身又说不上来。于是对迭代版的setTimeout和setInterval做了一些对比和验证

# 正常情况下，recursive setTimout和setInterval谁的误差大？

注：正常情况下是指，cpu正常，没有其他tasks，任务不超时等

验证代码如下

```javascript
let intervalCount = 0
let timeoutCount = 0
const startDate = new Date().getTime()

const recur = () => {
  setTimeout(() => {
    timeoutCount++
    let date = new Date().getTime()
    console.log('timeout', date - startDate - 1000 * timeoutCount)
    recur()
  }, 1000)
}
recur()

setInterval(() => {
  intervalCount++
  let date = new Date().getTime()
  console.log('interval', date - startDate - 1000 * intervalCount)
}, 1000)
```
这里输出了两种方法下，理想的时间和现实时间的差值

# 两者之前的细微差别有哪些？

> [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
>
> The difference between the two versions of the above code is a subtle one.
>
> - Recursive `setTimeout()` guarantees the given delay between the code execution completion and the next call. The delay for the next execution will start counting only after the code has finished running, therefore *excluding* the time taken to run the code. In this example, the `100` milliseconds will be the delay between the `run` code finishing, and the next `run` call.
> - The example using `setInterval()` does things somewhat differently. The interval you chose *includes* the time taken to execute the code you want to run in. Let's say that the code takes `40` milliseconds to run — the interval then ends up being only `60` milliseconds.
> - When using `setTimeout()` recursively, each iteration can calculate a different delay before running the next iteration. In other words, the value of the second parameter can specify a different time in milliseconds to wait before running the code again.

其中第一二点是说settimeout和setinterval的侧重点不同，settimeout保证代码之间的执行时间间隔，间隔并不包括代码本身运行时间。而setinterval的间隔包含了代码执行时间

验证代码如下

```javascript
const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 300)
  })
}

var lastTimeout = new Date().getTime()
const recur = () => {
  setTimeout(async () => {
    let date = new Date().getTime()
    console.log('timeout', date - lastTimeout)
    await asyncFunc()
    lastTimeout = new Date().getTime()
    recur()
  }, 1000)
}
recur()

var lastInterval = new Date().getTime()
setInterval(async () => {
  let date = new Date().getTime()
  console.log('interval', date - lastInterval)
  await asyncFunc()
  lastInterval = new Date().getTime()
}, 1000)

```

这里设置间隔为1000ms，代码本身运行时间300ms，输出代码结束到下一次代码开始的时间间隔

第三点说的是补偿版的settimeout，即运行下一个settimeout前，对时间间隔进行调整，缩小误差

除此之外还有一些小的知识点，

> [HTML Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html) 
>
> Timers can be nested; after five such nested timers, however, the interval is forced to be at least four milliseconds.
>
> *The task's* [timer nesting level](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timer-nesting-level) *is used both for nested calls to* `setTimeout()`*, and for the repeating timers created by* `setInterval()`*. (Or, indeed, for any combination of the two.) In other words, it represents nested invocations of this algorithm, not of a particular method.*

即settimeout和setinterval都有一个最小时间间隔，4ms。虽然我跑的时候两个方法的最小时间间隔表现的并不一致

> *Because* `clearTimeout()` *and* `clearInterval()` *clear entries from the same list, either method can be used to clear timers created by* `setTimeout()` *or* `setInterval()`*.*

要清除定时器，cleaTimeout()和clearInterval()可以互用

# 当script超时，两种方法的不同

注：只在chrome上跑出的结果

验证代码如下

```javascript
const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
}
let intervalCount = 0
let timeoutCount = 0
const startDate = new Date().getTime()

const recur = () => {
  setTimeout(async () => {
    timeoutCount++
    await asyncFunc()
    let date = new Date().getTime()
    console.log('timeout', date - startDate - 1000 * timeoutCount)
    recur()
  }, 1000)
}
recur()

setInterval(async () => {
  intervalCount++
  await asyncFunc()
  let date = new Date().getTime()
  console.log('interval', date - startDate - 1000 * intervalCount)
}, 1000)

```
这里声明了两个计时器，时间间隔为1000ms，但都要执行3000ms时长的任务

# 在script运行途中，清除定时器会怎样



