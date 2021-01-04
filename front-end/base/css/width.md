- clientWidth，`Element.clientWidth`  = content + padding（乘2啥的就省了）

  > 这个属性将会 round(四舍五入)为一个整数。如果你想要一个fractional(小数)值,请使用[`element.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect).

- offsetWidth，`offsetWidth` = content + padding + border + scrollbar)

  > 这个属性将会 round(四舍五入)为一个整数。如果你想要一个fractional(小数)值,请使用[`element.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect).

- scrollWidth，没有实际测过，在clientWidth的基础上，可以包括伪元素::before, ::after，不同浏览器表现形式有区别
- getBoundingClientReact()，除此外还可以取到相对于视窗的上下左右的距离，这个感觉蛮重要的，请看下文：

 

大多数情况下，当元素没有什么形状上的变化时，他们与 [getBoundingClientRect()](https://developer.mozilla.org/en/DOM/element.getBoundingClientRect)的宽高一致。

但是如果发生变化，offsetWidth和offsetHeight将返回元素的布局宽高，而getBoundingClientRect()将返回实际渲染的宽高。例如：如果元素的宽width:100px,变化transform:scale(0.5)，此时getBoundingClientRect()将返回宽50，而offsetWidth将返回宽100.

























