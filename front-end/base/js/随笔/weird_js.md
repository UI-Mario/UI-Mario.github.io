曾以为js用的很熟了，稀奇古怪的面试题也背了不少，直到遇见了一个网站

http://javascript-puzzlers.herokuapp.com/

记录一下被吊打的经历:cry:

1.
```js
var name = 'World'

(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})();
```

错误后立马回滚思路，觉得是hoisting和IIFE的混合作用（没有注意到函数里还有个name），一直在折腾这个问题：

- IIFE的hoisting和普通函数是否有区别

于是写下如下代码

```js
var name = 'World'
(function () {
    console.log(name)
})();
```

想着如果给我个`undefined`那可真是不枉我折腾这么久，结果打脸了:weary:

2.

```js
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
  console.log(i);
  if(i === END) break
  count++;
}
console.log(count);
```

万恶的IEEE 754

3.

```js
var arr = [1,2,3]
arr[10] = 10
console.log(arr.filter(item => item === undefined))
```

猜测是filter内部实现逻辑，在[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)上找到了这句话 

> A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned

4.

```js
parseInt(3, 8)
parseInt(3, 2)
parseInt(3, 0)
```

对于这个方法敬而远之

去[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)上翻parseInt的描述，结果迷茫了

parseInt的第二个参数radix，MDN上相关描述是

> An integer between `2` and `36` that represents the *radix* (the base in mathematical numeral systems) of the `string`.

然后关于函数本身的返回值有如下规则(MDN):

> ### [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#return_value)
>
> An integer parsed from the given `string`.
>
> Or [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) when
>
> - the `radix` is smaller than `2` or bigger than `36`, or
> - the first non-whitespace character cannot be converted to a number.

总的来说就是限定radix范围2~36，超范围返回NaN

5.

```js
Array.isArray( Array.prototype )
```

看见这题主要有两方面猜测：

- isArray在内部逻辑里还是原型链，不过解决了cross-platform问题
- Array.prototype本来就是数组



// #6
// 这到底是掀翻逻辑，还是隐式转化
// TODO:话说if()都干了些啥
var a = [0];
if ([0]) { 
  console.log(a == true);
} else { 
    console.log("wut");
}

7.
1 + - + + + - + 1 

8.

```js
var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });
```

