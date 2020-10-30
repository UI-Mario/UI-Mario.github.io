# 多个!important

> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
>
> 当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，`!important` 与优先级无关，但它与最终的结果直接相关。使用 `!important` 是一个**坏习惯**，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找bug变得更加困难了。当两条相互冲突的带有 `!important` 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。

`!important`是个不太好的习惯，但当我们不得不使用它的时候，

#### 怎样覆盖 `!important`

- A)很简单，只需再添加一条 带 `!important` 的CSS规则，再给这个给选择器更高的优先级（添加一个标签，ID或类）；或是添加一样选择器，把它的位置放在原有声明的后面（总之，最后定义一条规则比胜）。

一些拥有更高优先级的例子：

```css
   table td { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
```

- B)或者使用相同的选择器，但是置于已有的样式之后：

```css
td { height: 50px !important; }
```

如果说用了一次!important还不够，其他地方样式也得用，那真的是，不吃css这口饭的我扭头就走:dog:

# styleName vs className

当我们使用react的时候，可以通过设置styleName给标签添加外联样式，但这是否会和className的样式产生冲突呢？

