# 有意思的css属性

## background-clip

## backface-visibility

## filter

## perspective preserve-3d

# 预处理器 
## sass less
### basic usage
## post css
### write a plugin

# css module

## 独立作用

其实关于css，只能算是种描述方法，所以没有作用域这种概念，css的规则都是全局的

如果想精确指定css规则生效范围，就平时开发习惯来说，会给element添加上一个**独一无二的class或id**，来实现对应的样式

但是随着前端模块化兴起和项目的庞大，起一个独一无二的class对于开发很不友好

### class2hash

于是一开始有些css的预处理器会编译class成hash字符串，这样来实现css规则的精确定位

但这种方式的话，缺点太显著：

- 只是对css文件中的class进行编译，但是html和js里的class只能曲线救国（严格来说，这是class2hash大方向下的的编译困难）
- 不利于后期调试维护
- @import引入其他样式
- js操作class

阮一峰老师对于这种方式也有过讲解[css module-阮一峰](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)，当然现在的css-loader版本表现会有不一致，具体[webpack的描述](https://webpack.docschina.org/loaders/css-loader/)也很冗长

第一个缺点的代码表现形式如下：
```
import styles from './app.css'

let element = `
  <div class="${styles.element}">
  ...
  `
```
还不如直接css-in-js，虽然css-in-js也有缺点，例如不能复用

第二个缺点显而易见，跟一些想法异曲同工，例如设计稿直接导出html

第三个的话，就是会把@import导入的css也给转成hash，存在当前css里

目前[codepen](https://codepen.io/trending)采用的就是这种css module

### css selector

相比于上一种，这种方式原理仍是生成hash，但是路线巧妙了很多，实现原理利用了css选择器：
```
<div special-attribute class="item"></div>

.item[special-attribute] {
  ...
}
```

相较于直接转换class，这种方式很好的优化了开发体验。至于编译的难易程度，感觉跟上一种不相上下

缺点嘛，就是html看起来有点丑陋了


### shadow dom

web component的兴起才了解到这一概念，优势就在于它是浏览器所普遍支持的

缺点在于，Shadow DOM 内部的元素始终不会影响到它外部的元素（除了 :focus-within）

## 导入导出

### @import和link

一般来说的建议是使用link，因为@import会在进行css解析的过程中才进行下载，而link标签可以进行很多灵活的配置，像是preload、prefetch、as、title

