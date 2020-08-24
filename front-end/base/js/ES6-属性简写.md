ECMAScript6使得声明对象字面量更加简单，提供了属性简写和方法简写功能，属性名计算的新特性。

```
function getInfo(name, age, weight) {
    return {
        // 如果属性名和属性值同名可以利用、es6的属性简写
        name,  // 等同于 make: make
        age, // 等同于 model: model
        weight, // 等同于 value: value

        // ES6的属性名是可计算的
        ['over' + weight]: true,

        // 对象方法名简写可以省略 function 关键字
        descripte() {
            console.log(name, age, weight);
        }
    };
}

let person = getInfo('Kia', 27, 400);
console.log(person);// {name: "Kia", age: 27, weight: 400, over400: true, descripte: ƒ}
```

如果可以理解上述三个新特性，可以不必往下阅读。下面的文字仅提供给还有疑问的朋友。

## 属性简写

在 ES5及以前的版本中，对象字面量只支持键值对集合。实际业务中，对象字面量的初始化会有一定的代码重复。

```
//ES5
function createPeople(name, age) {
    return {
        name: name,
        age: age
    };
}
```

`createPeople`函数用来创建一个People的对象，可以看到上面的代码的 `name`和`age`分别书写了两次，有些麻烦。在ES6中通过使用属性简写特性可以消除这种属性名称和局部变量之间的重复书写,当对象的属性和变量同名时，可以不必再写冒号和值。

```
function createPeople(name, age) {
    return {
        name,
        age
    };
}
```

## 方法名简写

ES5中若为对象添加方法必须指定方法名称，并完整地定义函数来实现。

```
var people = {
    name: 'xixi',
    sayName: function () {
        console.log(this.name);
    }
};
```

ES6的语法更简洁，消除了冒号和方法名。

```
let people = {
    name: 'xixi',
    sayName() {
        console.log(this.name);
    }
};
people.sayName();// xixi
```

## 属性可计算

```
let lastName = 'last name';
let person = {
    [lastName]: 'yuan'
};
console.log(person[lastName]);// yuan
```