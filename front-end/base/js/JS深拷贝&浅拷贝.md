拷贝，我们常常用在把A对象的属性copy到B对象，这样B对象就拥有了A对象的属性。当B对象的属性不是*基本数据类型*，而是数组或者对象的时候，就会出现浅拷贝和深拷贝的区别。

# 浅拷贝

当B对象的属性是数组或者对象的时候，浅拷贝是通过使A对象的同名属性指向B对象的属性的内存地址，从而达到copy的目的。这样的做法会造成一个问题，当我们改变B对象这个属性时，A对象的这个属性也会被改变，因为它们是指向同一段内存地址的。

# 深拷贝

与浅拷贝相对应，当源对象的属性是一个对象或者数组时，深拷贝会为目标对象开辟一段新的内存地址，然后把源对象属性的值一一拷贝到目标对象，而不是直接使二者指向同一段内存地址。

# 数据类型

写到这里觉得有必要提一下数据类型，在js中，数据分为基本数据类型(String, Number, Boolean, Null, Undefined，Symbol)和引用数据类型。

- 基本数据类型的特点：直接存储在栈(stack)中的数据。
- 引用数据类型的特点：存储的是该对象在栈中引用，真实的数据存放在堆内存里。

引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

[![img](https://ftp.bmp.ovh/imgs/2019/11/e92bac5084e6d6b9.jpeg)](https://ftp.bmp.ovh/imgs/2019/11/e92bac5084e6d6b9.jpeg) # 实现

浅拷贝

```
function shallowCopy(origin, destination) {
    for (let i in origin) {
        if (origin.hasOwnProperty(i)) {
            destination[i] = origin[i];
        }
    }
    return destination;
}
```

深拷贝

1.

**javascript**



```
var targetObj = JSON.parse(JSON.stringify(copyObj))
```

2.

```
function deepCopy(origin, destination) {
    for(let i in origin){
        if(typeof origin[i] === 'object'){
            if(origin[i].constructor === 'Array'){
                destination[i] = [];
            }else{
                destination[i] = {};
            }
            deepCopy(origin[i], destination[i]);
        }else{
            destination[i] = origin[i];
        }
    }

    return destination;
}
```

