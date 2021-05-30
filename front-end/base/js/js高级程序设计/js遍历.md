# 遍历对象

question:

- 是否会便利到对象原型

- 不可枚举属性、symbol类型是否会被遍历

- 顺序如何确定

- 跟map的遍历有没有优劣之分

methods:

- for in

- Object.keys

- Object.values

- Object.getOwnPropertyNames
```
const prototype = {
  a: 'a',
  12: 12,
  7: 7,
  0: 0,
  "-2": -2,
  "-3.5": -3.5,
  b: 'b',
}

const obj = Object.create(prototype)

obj.own = 123

Object.defineProperty(obj, "sex", {
    value: "male",
    //是否为枚举属性
    enumerable: false
});

for (var key in obj) {
  console.log(key);
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.getOwnPropertyNames(obj))
```

plus:

> [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

Object.defineProperty，对象和Map类型的区别之一是，Map可以以字符串和symbol以外的类型作为键名(虽然我们上面以number为键名也成功了，但其实是做了层转换，详见:`const obj = {0:0, '0':1, false: 2}`，猜测大概率是`Object.prototype.toString.call()`方法)

Object.defineProperty可以定义以下属性:

- configurable

- enumerable

- value

- writable

- get

- set

另外这个方法也是vue2数据劫持的核心

```
var obj = {
  arr: [1, 2, {
    u: 678
  }],
  child: {
    s: 123,
    arr: [4, 5, 6],
    grandson: {
      z: 1
    }
  },
  name: 'name',
  sex: 'male'
}


const orginalProto = Array.prototype;
const arrayProto = Object.create(orginalProto); // 先克隆一份Array的原型出来
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(method => {
  arrayProto[method] = function() {
    // 执行原始操作
    orginalProto[method].apply(this, arguments)
    console.log('监听赋值成功', method)
  }
})

const definePropertyObserve = (data, isArray = false) => {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  const keys = Object.getOwnPropertyNames(data)
  keys.map(key => {
    const res = data[key]
    // 因为数组的length属性，name属性
    // 不过这么写的话，get的时候会把数组里面的元素get也触发
    if (isArray && isNaN(Number(key))) return
    Object.defineProperty(data, key, {
      get() {
        console.log('get:', res)
        return res
      },
      set(newVal) {
        console.log('set:', newVal)
        return newVal
      }
    })

    if (typeof res === 'object') {
      if (Array.isArray(res)) {
        // defineproperty对于数组为什么无能为力呢，其实它可以给每个元素
        // 设置get、set，但是无法监听length上的变化
        // 所以，可以在defineproperty的基础上，重写一下那些引起长度变化的方法
        // 巧了还都在原型链上
        // push, pop, shift, unshift, splice, sort, reserve
        res.__proto__ = arrayProto
      }
      definePropertyObserve(res, Array.isArray(res))
    }
  })
}

definePropertyObserve(obj)
```

# 遍历数组