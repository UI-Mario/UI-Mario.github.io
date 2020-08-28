# Now

- typescript
- react
- webpack
- 测试工具
- git
- docker
- redux

# Future

- 网络协议、安全
- 熟读js
- 看操作系统、编译原理
- 算法与数据结构
- 造轮子
- 读源码（vue、react、es6、webpack、babel）

# extra

- ssr
- mac操作
- vim配置
- Three.js
- WebGL

# EveryDay

- leetcode
- book
- blog（掘金，公众号）

# es6

## Objec.is()

用于比较两个值是否相等，起因：

js只有两个比较相等运算符：相等运算符（==）和严格相等运算符（===），前者会自动转换数据类型（涉及到了类型转换，看一眼就好），后者也有缺陷（NaN不等于自身，+0等于-0）

Object.is()就是来修复这些缺陷的

## 遍历

- Es5：foreach()，不能中断

- Es6：for in，for of

其中for of中，只要遍历的数据结构有Iterator接口，就可以遍历，这些数据结构有：

- 数组 Array
- Map
- Set
- String
- arguments对象
- Nodelist对象, 就是获取的dom列表集合
- 字符串（es6为他添加iterator接口）



Iterator接口：有这个接口就可以调用for of和解构赋值



## 函数参数默认值

默认声明的参数变量，不能用let或const再次声明

```javascript
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
```



使用参数默认值时，不能有同名参数



指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length`属性将失真。



参数默认值会形成单独作用域（context），具体请见阮一峰es6









