# javascript

JavaScript 脚本语言具有以下特点:

- 脚本语言。JavaScript 是一种解释型的脚本语言，是在程序的运行过程中逐行进行解释执行，不需要预编译；而 Java、C++ 等语言需要先编译后执行；

- 动态性。JavaScript 能够动态修改对象的属性，没有办法在编译的时候知道变量的类型，只有在运行的时候才能确定；而 Java、C++ 等都是静态类型语言，他们在编译的时候就能够知道每个变量的类型；

- 跨平台性。JavaScript 脚本语言不依赖于操作系统，仅需要浏览器的支持。可以在多种平台下运行（如 Windows、Linux、Mac、Android、IOS 等）

https://mp.weixin.qq.com/s/nV75KBmRGpcE7Pn5Z-HUFg

**附加**：**JavaScript 比 Java 慢的原因**
和大多数解释型语言一样，JavaScript 运行也比较慢，和 Java 等静态编译语言相比，究其原因大概有：

- JavaScript 变量无类型信息，不能做偏移信息查找，偏移信息共享等编译阶段的优化
- JavaScript 将源码编译为字节码的过程要占用运行时间，而 Java 的编译则是开发阶段，不占用任何运行时间。故 Java 可以尽可能的在编译阶段做优化
- 附：想深入理解建议去看编译原理

# 执行上下文(Execution Context)

简而言之，执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。

## 执行上下文的类型

JavaScript 中有三种执行上下文类型。

- **全局执行上下文** — 这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 `this` 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。
- **函数执行上下文** — 每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序（将在后文讨论）执行一系列步骤。
- **Eval 函数执行上下文** — 执行在 `eval` 函数内部的代码也会有它属于自己的执行上下文，但由于 JavaScript 开发者并不经常使用 `eval`，所以在这里我不会讨论它。

## 执行上下文的创建

> ES5 标准文档中规定，执行环境包括：词法环境、变量环境、this 绑定。并且解释道：其中执行环境的词法环境和变量环境组件始终为词法环境对象。当创建一个执行环境时，其词法环境组件和变量环境组件最初是同一个值。在该执行环境相关联的代码的执行过程中，变量环境组件永远不变，而词法环境组件有可能改变。

> ES6 中规定，**词法环境**是一种规范类型，基于 ECMAScript 代码的词法嵌套结构来定义**标识符**和具体变量和函数的关联。一个词法环境由环境记录器和一个可能的引用**外部**词法环境的空值组成。

1. this 绑定
2. 创建词法环境（Lexical Environments）
3. 创建变量环境

想要具体了解 js 执行时发生的事请转往：[【译】JS 的执行上下文和环境栈是什么？](https://juejin.im/post/5c855410e51d45555e2626fd)

# 执行栈(Execution Stack)

执行栈，就是用来存储代码执行时的所有执行上下文，是一种 LIFO（后进先出）的数据结构。

JavaScript 是一门单线程的编程语言，因此它只能一次做一件事。所以当我们运行某段代码的时候，把它的执行上下文放入栈顶，当执行完毕代码后便把相应的执行上下文从栈顶弹出。

# 任务队列

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 设备（输入输出设备）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。

JavaScript 语言的设计者意识到，这时主线程完全可以不管 IO 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 设备返回了结果，再回过头，把挂起的任务继续执行下去。

于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入”任务队列”（task queue）的任务，只有”任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

1. 所有同步任务都在主线程上执行，形成一个[执行栈](http://www.ruanyifeng.com/blog/2013/11/stack.html)（execution context stack）。
2. 主线程之外，还存在一个”任务队列”（task queue）。只要异步任务有了运行结果，就在”任务队列”之中放置一个事件。
3. 一旦”执行栈”中的所有同步任务执行完毕，系统就会读取”任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上面的第三步。

# js 引擎

虽然浏览器非常多，但是主流的 JavaScirpt 引擎其实很少，毕竟开发一个 JavaScript 引擎是一件非常复杂的事情。比较出名的 JS 引擎有这些：

- [V8](https://v8.dev/) (Google) //Chrome 与 Node.js 都使用了 V8
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) (Mozilla)
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore?language=objc) (Apple)
- [Chakra](https://github.com/microsoft/ChakraCore) (Microsoft)
- IOT：[duktape](https://github.com/svaarala/duktape)、[JerryScript](https://github.com/jerryscript-project/jerryscript)

还有，最近发布[QuickJS](https://bellard.org/quickjs/)与[Hermes](https://hermesengine.dev/)也是 JS 引擎，它们都超越了浏览器范畴，[QuickJS](https://link.zhihu.com/?target=https%3A//bellard.org/quickjs/)是大神[Fabrice Bellard](https://en.wikipedia.org/wiki/Fabrice_Bellard))发布的，可以将 JavaScript 源码转换为 C 语言代码，然后再使用系统编译器(gcc 或者 clang)生成可执行文件。Facebook 为 React Native 开发了新的 JS 引擎[Hermes](https://link.zhihu.com/?target=https%3A//hermesengine.dev/)，用于优化安卓端的性能。它可以在构建 APP 的时候将 JavaScript 源码编译为 Bytecode，从而减少 APK 大小、减少内存使用，提高 APP 启动速度。[Atwood’s Law](https://blog.codinghorror.com/the-principle-of-least-power/)再次得到了证明：

> Any application that can be written in JavaScript, will eventually be written in JavaScript.

JavaScriptCore 的大致流程：JavaScript 源代码 -> 抽象语法树（AST）-> 字节码-> 本地代码

V8 的大致流程：JavaScript 源代码 -> 抽象语法树（AST）-> 本地代码 （2017 年 4 月发布 5.9 版本后新增了 Ignition 字节码解释器，与 JScore 流程大致相同）

这是因为编程语言有两个类别：**静态类型和动态类型**。静态类型的语言，比如 C++、Go 等，都需要提前编译 **（AOT）** 成机器码然后执行，这个过程主要使用编译器来完成；而动态语言，比如 JavaScript、Python 等，只在运行时进行编译执行 **（JIT）** ，这个过程通过解释器完成。

**JIT(Just-in-Time)**

**AOT(Ahead-of-Time)**

**抽象语法树(Abstract Syntax Tree, AST)**

**编译器（Compiler）** 或者**解释器（Interpreter)**

# v8 的垃圾回收机制

在 v8 里，内存对象被分成了两种，新生代对象和老生代对象，两者各放在不同的内存空间中，也就是：新生代内存空间和老生代内存空间。他们都有各自的垃圾回收算法。

[![img](https://s2.ax1x.com/2019/12/12/Q6IFkn.png)](https://s2.ax1x.com/2019/12/12/Q6IFkn.png)

## 新生代回收算法 scavenge

1.把新生代内存区再均分成两块，每一块都叫做 semispace，这两个只有一个处于使用状态(称为 From 空间)，一个处于闲置状态(称为 To 空间)

2.新分配的对象放入 From 空间中。

3.开始垃圾回收时，检查 From 中所有存活的对象，把他们复制到 To 空间中，然后回收整个 From 空间。

4.From 和 To 互换角色，重复之前的过程。

5.如果一个对象经过多次复制后，仍然存活，它会被认为是生命周期较长的对象，随后会被移动到老生代中，这个过程叫做对象的晋升，晋升的条件有两个：一是对象经历过 scavenge 回收过程仍然存活，二是 To 空间内存占用比超过限制，一般是 To 空间已经使用了超过 25%时

## 老生代回收算法 Mark-Sweep 配合 Mark-Compact

### Mark-Sweep

#### 原理

标记阶段时遍历所有老生代中的对象，标记活着的对象，清除阶段时只清除没有被标记的。

#### 缺点

由于标记的随机性，内存出现不连续的状态，被切割成很多小块，导致没有充足的空间分配给大对象。

### Mark-Compact

#### 原理

为了解决 sweep 的缺点，提出了这个算法，它不同之处在于，对象被标记死亡后，整理过程中，会将活着的对象往一端移动，移动完成后，直接把另一端，边界外的对象全部清理掉。

#### 缺点

移动对象的过程会导致性能损耗，执行速度不会很快

### 标记过程优化

#### 问题

由于垃圾回收时，应用的逻辑会被暂停，以避免发生 js 逻辑层与垃圾回收器数据不一致，因此一次垃圾回收时间过长时肯定会导致性能大幅下降。

#### 对策

V8 在标记阶段，会将一次性标记改成增量标记，叫做 incremental marking，拆成很多小步进行步进，以避免每次回收时间过长。

**参考:**

[v8 的垃圾回收机制-语雀](https://www.yuque.com/lvshukai/rfgt5x/kcgw1z)

[聊聊 v8 的垃圾回收-掘金](https://juejin.im/post/5ad3f1156fb9a028b86e78be)

当然强烈推荐去看编译原理，上面更多方法实现垃圾回收。

