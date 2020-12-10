```
class Fruit {

}

const A = new Fruit()

const B = {}

const C = new Object()

const D = Object.create(null)

console.log(A, A.__proto__===Object.prototype)
console.log(B, B.__proto__===Object.prototype)
console.log(C, C.__proto__===Object.prototype)
console.log(D, D.__proto__===Object.prototype)
// console.log(A.__proto__===Object.prototype)

```

有多少种创建对象的方法

区别，Object.defineProperty等方法是否有用

原型链

不同方法的原理及手写

