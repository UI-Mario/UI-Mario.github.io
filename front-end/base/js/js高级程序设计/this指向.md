# THIS常用场景

## 1、以函数形式调用,this指向window

```
function fn(m,n){
   m=2;
   n=3;
console.log(this.m,n);//undefined,this指向了window
}
fn();
```

严谨来说，当fn()是直接使用不带任何修饰的函数引用进行调用的，则默认绑定到全局对象上，浏览器里就是`window`；但是在`use strict`的情况下就是`undefined`。



## 2、以方法形式调用,this指向调用方法的那个对象

```
box.onclick =function(){
    this.style.backgroundColor = "red"; //this指向box,box颜色为红色
}
```

## 3、构造函数调用,this指向实例的对象

```
function Person(age , name ) {
   this.a = age ;
   this.b = name;
   console.log(this)  // 此处 this 分别指向 Person 的实例对象 p1 p2 
}
   var p1 = new Person(18, 'zs')
   var p2 = new Person(18, 'ww')
 控制台输出:
 Person {a: 18, b: "zs"}
 Person {a: 18, b: "ww"}
```

## 4、使用window对象的方法时,指向window

```
var box =document.getElementById("box");
box.onclick =function(){
    setTimeout(function(){
       this.style.backgroundColor="yellow"
    },1000)
}
//报错,因为setTimeout是window的一个方法.
```

更改错误,使box颜色为yellow

```
var box =document.getElementById("box");
box.onclick =function(){
    var me = this;//box调用了这个方法,此时的this指向box,此操作将指向box的this赋给me,则得到的me的指向为指向this
    setTimeout(function(){
       me.style.backgroundColor="yellow"//此时的me.style就指的是box的style
    },1000)
}
```

## 5、多重场景改变this指向

```
box.onclick=function(){ 
     function fn1(){ 
          console.log(this); 
     } 
     fn1(); //事件触发了fn1,在函数内部,以函数形式调用this依旧指向window
     console.log(this);//事件处理函数中的this,该事件由谁触发,this就指向谁
};
```

## 6、箭头函数里的this

```
var name = 'window'
var obj = {
    name:'obj',
    fn:function(){    
       (function (){
        console.log(this.name)
       })()
    }    

}
obj.fn() //window
		 //附：在quickjs引擎里是window，在node里是undefined，chrome浏		   览器里居然也是window（node和chrome用的都是v8引擎）

//普通函数，由于闭包函数是window执行的，所以this指向window；
//箭头函数的this指向函数创建时的作用域。

var name = 'window'
var obj = {
    name:'obj',
    fn:function(){    
       (()=>{ //改成箭头函数
        console.log(this.name)
       })()
    }    

}
obj.fn()

//改成箭头函数，后可以看出创建时的作用域是obj.fn函数执行是的作用域，也就是obj

var f = obj.fn;
f();  //就变成全局了
```

## 7、call、apply、bind改变this指向

# 修改THIS指向

## apply、call、bind用法

- apply:
  **fn.apply(thisObj,数组参数）**
  定义：应用某一个对象的一个方法，用另一个对象替换当前对象
  说明：如果参数不是数组类型的，则会报一个TypeError错误。

- call:

  **fn.call(thisObj, arg1, arg2, argN)**
  apply与call的唯一区别就是接收参数的格式不同。

- bind:

  **fn.bind(thisObj, arg1, arg2, argN)**
  bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

## 实现

**apply**

```
Function.prototype.myApply= function(context){
    context.fn = this;//1.将函数挂载到传入的对象
    var arg = [...arguments].splice(1)[0];//2.取参数
    if(!Array.isArray(arg)) {
        throw new Error('apply的第二个参数必须是数组') //3.限制参数类型为数组
    }    
    context.fn(arg) //4.执行对象的方法
    delete context.fn; //5.移除对象的方法
}

var obj = {
    name:'obj'
}
function sayName(arr){
    console.log(this.name,arr)
}
sayName.myApply(obj,[1,2,3]) //obj [1, 2, 3]
```

**call**

```
Function.prototype.myCall= function(context){
    context.fn = this;//1.将函数挂载到传入的对象
    var arg = [...arguments].splice(1);//2.取参数
    context.fn(...arg) //3.执行对象的方法
    delete context.fn; //4.移除对象的方法
}
var obj = {
    name:'obj1'
}
function sayName(){
    console.log(this.name,...arguments)
}
sayName.myCall(obj,1,2,3,5) //obj1 1,2,3,5
```

**bind**

```
Function.prototype.myBind = function(oThis){
    if(typeof this !== 'function'){
        throw new TypeError('被绑定的对象需要是函数')
    }
    var self = this
    var args = [].slice.call(arguments, 1)
    fBound = function(){ //this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
        return self.apply(this instanceof fBound ? this : oThis, args.concat([].slice.call(arguments)))
    }
    var func = function(){}
    //维护原型关系
    if(this.prototype){
        func.prototype = this.prototype
    }
    //使fBound.prototype是func的实例，返回的fBound若作为new的构造函数，新对象的__proto__就是func的实例
    fBound.prototype = new func()
    return fBound
}
```

[javascript](https://ui-mario.github.io/tags/javascript/)[前端](https://ui-mario.github.io/tags/前端/)[es6](https://ui-mario.github.io/tags/es6/)