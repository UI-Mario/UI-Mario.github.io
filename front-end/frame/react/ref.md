> 单独拧这个出来是因为ref困惑了我很久，发一篇泄愤
>
> [阮一峰老师的博客](http://www.ruanyifeng.com/blog/2019/09/react-hooks.html)

首先ref是什么？

一种标记，挂在ReactElement（JSX.Element）上面，通过ref.current可以直接操作react转换后的html element

可控组件和非可控组件的区别就是，dom元素值是否受到react的state控制
