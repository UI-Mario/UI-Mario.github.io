因为最近打算把很久之前写的unity小游戏移植到移动端，所以写了这篇操作步骤。

首先安卓环境配置

## 1.选择edit->preference，再选择external tools

[![img](https://ftp.bmp.ovh/imgs/2019/11/f6c3234b157d25ac.jpg)](https://ftp.bmp.ovh/imgs/2019/11/f6c3234b157d25ac.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/f6c3234b157d25ac.jpg)



[![img](https://ftp.bmp.ovh/imgs/2019/11/a2f8820f014c2b57.jpg)](https://ftp.bmp.ovh/imgs/2019/11/a2f8820f014c2b57.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/a2f8820f014c2b57.jpg)





## 2.我们现在需要两个文件夹，JDK和SDK（红圈，路径不含中文），NDK没必要。

点击JDK和SDK后面的download会弹出网页让你下载，不过有点小小的障碍。

SDK：会通过android studio让你下载SDK包，没错就是装android studio的过程中下载SDK包，记住你SDK下载的位置就行，然后点browse找到你的SDK文件夹，JDK道理一样。

JDK：JAVA SE 9不能用，具体什么原因我也忘了，下载JAVA8.*的JDK

[![img](https://ftp.bmp.ovh/imgs/2019/11/c09776604177c2dd.jpg)](https://ftp.bmp.ovh/imgs/2019/11/c09776604177c2dd.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/c09776604177c2dd.jpg)



## 3.添加环境变量，这个过程比较繁琐，推荐网页：[unity3d配置Android环境，打包发布Apk流程详解](https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/3c67fbfbb67c)

然后我们开始打包，选择file->build setting，选中安卓，点击playersetting

[![img](https://ftp.bmp.ovh/imgs/2019/11/9c654ea62f44a0ae.jpg)](https://ftp.bmp.ovh/imgs/2019/11/9c654ea62f44a0ae.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/9c654ea62f44a0ae.jpg)



[![img](https://ftp.bmp.ovh/imgs/2019/11/955721274c15a031.jpg)](https://ftp.bmp.ovh/imgs/2019/11/955721274c15a031.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/955721274c15a031.jpg)



这里面很多发布的设置，可以自己慢慢去摸索，但打包安卓有几点必须清楚：

改掉other setting里面的packagename，像我上面改的，

然后安卓版本也可以自己选，不超过你手机安卓版本就行，一般6.0,7.0

[![img](https://ftp.bmp.ovh/imgs/2019/11/c57acd74e35bd457.jpg)](https://ftp.bmp.ovh/imgs/2019/11/c57acd74e35bd457.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/c57acd74e35bd457.jpg)



然后就开始打包build，记得gradle改成internal，就完成了。

[![img](https://ftp.bmp.ovh/imgs/2019/11/50020c02fc1dc342.jpg)](https://ftp.bmp.ovh/imgs/2019/11/50020c02fc1dc342.jpg)

[img](https://ftp.bmp.ovh/imgs/2019/11/50020c02fc1dc342.jpg)



这里说一下如果想要做安卓游戏记得找安卓游戏教程，不是每个游戏都能打包成安卓在手机上玩的，涉及到代码和虚拟操作键等。

附游戏地址：https://github.com/UI-Mario/unity-learn-mario