# 计算机存储单位

- 位（bit），表示二进制位（0 或 1）
- 字节（byte），它由 8 个二进制位组成，即`1 byte = 8 bit`，是计算机内部计量的基本单位。一个英文字节占 1 个字节，一个汉字占 2 个字节。
- 字（word），它由若干个字节构成，是计算机内部进行数据处理和运算的基本单位。字的总的位数称为字长，不同档次的计算机字长是不一样的，比如 32 位机，它的 1 个字由 4 个字节构成，字长为 32 位，也就是说其 CPU 一次操作处理的实际位数是 32 位。同理，64 位机可以处理 64 位。由此可见，计算机的字长越大，其性能越优越。



# 编码

为什么要编码呢？因为计算机只能理解 0 和 1，像字母、汉字等字符需要编码成 0 和 1 才能被计算机所理解

由字符到二进制数称为编码，反过来则是解码。

## 常见编码规则

- _ASCII_，即 American Standard Code for Information Interchange（美国信息交换标准代码）。由于计算机是美国人发明的本来一个字节有 8 位，每一位有 0 和 1 两种状态，则一个字节共有 2^8=256 种状态，可以表示 256 种字符。但是美国佬觉得只要可以表示自己的字母和一些特殊字符就足够了，所以 ASCII 没有占用最高位（而是固定为 0），实际只用到了后面 7 位，它可以表示 2^7=128 种状态，因此，最早只有 127 个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，这个编码表被称为`ASCII`编码。但是要处理中文显然一个字节是不够的，至少需要两个字节，而且还不能和 ASCII 编码冲突，所以，中国制定了`GB2312`编码，用来把中文编进去
- _Unicode_，解决了编码统一的问题。每种语言的每个字符在 Unicode 的规则下，都只有统一且唯一的对应二进制编码。 缺点在于 Unicode 一般用两个字节表示一个字符，在某些情况下会出现极大浪费。
- _UTF-8_，UTF-8 是 Unicode 的一种实现方式。其他实现方式还包括 UTF-16 和 UTF-32。UTF-8 是一种变长编码，根据具体字符来变更所需的表示字节。它将基本 7 位 ASCII 字符仍用 7 位编码表示，占用一个字节（首位补 0）。而遇到与其他 Unicode 字符混合的情况，将按一定算法转换，每个字符使用 1-3 个字节编码，并利用首位为 0 或 1 进行识别。这样对以 ASCII 字符为主的英文文档就大幅节省了编码长度。

# java 基础知识

java 虚拟机（Java Virtual Machine），JVM

垃圾回收机制（Garbage collection），GC

Java 开发工具包（Java Development Kit），JDK（包含 JRE）

Java 运行环境（Java Runtime Environment），JRE（包含 JVM 和核心库）

java 三大体系：

- JavaSE（J2SE）（Java2 Platform Standard Edition，Java 平台标准版）
- JavaEE（J2EE）（Java2 Platform Enterprise Edition，Java 平台企业版）
- JavaME（J2ME）（Java2 Platform Micro Edition，Java 平台微型版）

## 集合框架

[![img](https://ftp.bmp.ovh/imgs/2020/02/ff803b82be619d66.png)](https://ftp.bmp.ovh/imgs/2020/02/ff803b82be619d66.png)

[![img](https://ftp.bmp.ovh/imgs/2020/02/63566ea364d8cfd8.png)](https://ftp.bmp.ovh/imgs/2020/02/63566ea364d8cfd8.png)

