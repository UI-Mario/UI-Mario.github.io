在js里属性有自身定义的，还有从原型链上继承的，

```
var Person = function (name) {
    this.name = name;
};

// 创建原型属性
Person.prototype.age = 26;

// 创建实例
var person = new Person('Jack');

// 在person实例中创建不可枚举属性"job"
Object.defineProperty(person, 'job', {
    value: 'WEB',
    enumerable: false,
    configurable: true, // 属性可以被删
    writable: true, // value可以被覆盖
});
```

[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty?_blank)：可以用来添加、删除属性，详细property配置请看链接

## [Enumerate the properties of an object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Enumerate_the_properties_of_an_object)

Starting with [ECMAScript 5](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla), there are three native ways to list/traverse object properties:

- `for...in` loops
  This method traverses all **enumerable** properties of an **object and its prototype chain**.
- [`Object.keys(o)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
  This method returns an array with all the **own** (not in the prototype chain) **enumerable **properties' names ("keys") of an object `o`.
- [`Object.getOwnPropertyNames(o)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
  This method returns an array containing all **own** properties' names (**enumerable or not**) of an object `o`.

有没有获取自身和原型链上所有可枚举不可枚举的属性呢？

没有，自己写，目前只有`Object.getOwnPropertyNames`可以获取不可枚举，那就只有递归它了

```
const getAllPropertyNames = (obj) => {
  var allPropertyNames = []
  while(obj) {
    allPropertyNames = allPropertyNames.concat(Object.getOwnPropertyNames(obj))
    obj = Object.getPrototypeOf(obj);
  }
  return allPropertyNames
}
```

