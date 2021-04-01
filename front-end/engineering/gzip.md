# 什么是gzip

gzip(GNUzip)，一个文件压缩程序

# 为什么要用gzip，在哪用

我们阅读页面的时候，数据都是从服务端所返回的，例如js、图片等。gzip可以帮助我们在服务端就压缩好大体积文件，传过来后由浏览器解压(耗费服务端和浏览器的CPU，节省传输开销)

当然我们也可以一开始构建的时候就把文件打包成gz压缩包，就可以减少压缩时间，具体可以尝试webpack的插件[compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin)

# better？

gzip具体做了些什么，跟其他压缩方式又有哪些不同？

TODO