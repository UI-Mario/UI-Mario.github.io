# 特性

## 箭头函数没有arguments

箭头函数不仅没有this，常用的arguments也没有。如果你能获取到arguments，那它一定是来自父作用域的。

```
function foo() {
  return () => console.log(arguments)
}

foo(1, 2)(3, 4)  // 1，2
```

arguments转化为真数组：

1. slice

   arguments 对象不支持数组的其他方法，但是可以用 Function.call 来间接调用。

   ```
   function sayHi() {
       console.log(Array.prototype.slice.call(arguments, 0))
   }
   sayHi("hello", "你好", "bonjour")  //["hello", "你好", "bonjour"]
   ```

2. splice

   ```
   function sayHi() {
       console.log(Array.prototype.splice.call(arguments, 0));
   }
   sayHi("hello", "你好", "bonjour")  //["hello", "你好", "bonjour"]
   ```

3. Array.from

   ```
   function sayHi() {
       console.log(Array.from(arguments));
   }
   sayHi("hello", "你好", "bonjour")  //["hello", "你好", "bonjour"]
   ```

4. 扩展运算符

   ```
   function sayHi(...arguments) {
       console.log(arguments);
   }
   sayHi("hello", "你好", "bonjour")  //["hello", "你好", "bonjour"]
   ```

在严格模式和非严格模式中，arguments 的表现显示不相同。

至于arguments有什么用呢，在我目前所接触的应用场景中，每个arguments对象都有两个额外的属性：arguments.callee和arguments.caller。前者指向使用该arguments对象被调用的函数。后者指向调用该arguments对象的函数。

其中arguments.callee除允许匿名函数递归调用自身（意思就是递归函数本来函数名跟这个函数是绑在一起的，arguments.callee可以做到让其他函数调用这个递归函数）

## 不能使用new

## 可以和变量解构结合使用

```
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}

 full({first: 1, last: 5}) // '1 5'
```

## 没有prototype

## call、apply没法修改其指向