javascript太恐怖了，暂且先搜集点样例，后面慢慢去看吧。

几组案例：

```
// 比较/匹配
[] == ![] // true
NaN !== NaN // true
[] == ''   // -> true
[] == 0    // -> true
[''] == '' // -> true
[0] == 0   // -> true
[0] == ''  // -> false
[''] == 0  // -> true

1 == true // true
2 == true // false
"2" == true // flase

null > 0 // false
null < 0 // false
null == 0 // false
null >= 0 // true

// 加法
true + 1 // 1
undefined + 1 // NaN

let obj = {};

{} + 1 // 1，这里的 {} 被当成了代码块
{ 1 + 1 } + 1 // 1

obj + 1 // [object Object]1
{} + {} // Chrome 上显示 "[object Object][object Object]"，Firefox 显示 NaN
1+{a:1} // 1[object Object]
[] + {} // [object Object]
[] + a // [object Object]
+ [] // 等价于 + "" => 0
{} + [] // 0
a + [] // [object Object]

[2,3] + [1,2] // '2,31,2'
[2] + 1 // '21'
[2] + (-1) // "2-1"

//baNaNa
'b' + 'a' + + 'a' + 'a' // -> baNaNa
'foo' + + 'bar' // -> 'fooNaN'

// 减法或其他操作，无法进行字符串连接，因此在错误的字符串格式下返回 NaN
[2] - 1 // 1
[2,3] - 1 // NaN
{} - 1 // -1
```



到底是为什么呢？ 下面有一个表供快速参考：

```
Number  + Number  -> addition
Boolean + Number  -> addition
Boolean + Boolean -> addition
Number  + String  -> concatenation
String  + Boolean -> concatenation
String  + String  -> concatenation
```

那么其他例子呢？对于`[]`和`{}`，toPrimitive和toString方法会在加法操作前被隐式地调用。

- [12.8.3 The Addition Operator (+)](https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus)
- [7.1.1 ToPrimitive(input [,PreferredType\])](https://ui-mario.github.io/2019/12/06/头大的javascript/[https://www.ecma-internationa...](https://www.ecma-international.org/ecma-262/#sec-toprimitive))
- [7.1.12 ToString(argument)](https://www.ecma-international.org/ecma-262/#sec-tostring)

# parseInt

```
//parsInt
parseInt('f*ck');     // -> NaN
parseInt('f*ck', 16); // -> 15
parseInt(null, 24) // -> 23
```

# return

下面的函数返回的结果竟然不是对象`{b:10}`：

```
(function () {
  return
  {
    b : 10
  }
})() // -> undefined
```

不过，如果稍微改写一下，就不一样了：

```
(function () {
  return {
    b : 10
  }
})() // -> { b: 10 }
```

这主要是因为有一个**自动行尾加分号**的机制在作怪，会自动在很多新行的行尾添加分号。在第一个例子中，实际上是在return后面添加了分号。

```
(function () {
  return ;
  {
    b : 10
  }
})() // -> undefined
```

# 3个number比较

```
1 < 2 < 3 // -> true
3 > 2 > 1 // -> false
```

我们来看看具体的执行过程就明白了：

```
1 < 2 < 3 // 1 < 2 -> true
true  < 3 // true -> 1
1     < 3 // -> true

3 > 2 > 1 // 3 > 2 -> true
true  > 1 // true -> 1
1     > 1 // -> false
```

# Math.max()比Math.min()小

```
Math.min(1,4,7,2)  // -> 1
Math.max(1,4,7,2) // -> 7
Math.min() // -> Infinity
Math.max() // -> -Infinity
Math.min() > Math.max() // -> true
```

原因: [Why is Math.max() less than Math.min()? by Charlie Harvey](https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min)

# sort() 函数自动类型转换

`sort()` 函数自动将值转换为字符串，这就会导致奇怪的事情发生。

```javascript
> [1,5,20,10].sort()
(4) [1, 10, 20, 5]
```

但是，它可以通过比较来解决:

```javascript
> [1,5,20,10].sort(function(a, b){return a - b});
(4) [1, 10, 20, 5]
```