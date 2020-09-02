# js简史

1994年10月，NCSA的一个主要程序员Marc Andreessen（就是讲浏览器历史里面的那位）联合风险投资家Jim Clark，成立了Mosaic通信公司（Mosaic Communications），不久后改名为Netscape。这家公司的方向，就是在Mosaic的基础上，开发面向普通用户的新一代的浏览器Netscape Navigator。并在同年12月，Navigator发布了1.0版。

[![img](https://ftp.bmp.ovh/imgs/2019/10/f3885bd9ca3773b9.jpg)](https://ftp.bmp.ovh/imgs/2019/10/f3885bd9ca3773b9.jpg)

但很快Netscape 公司发现，浏览器需要一种可以嵌入网页的脚本语言，用来控制浏览器行为。因为网速很慢上网很贵，有些操作不宜在服务端完成。而同年，Sun公司开发了Java语言，Netscape公司决定与Sun合作，但浏览器不必使用Java这样复杂的语言，因此开发了一款与Java接近且支持Java程序的语言。

1995年5月，Netscape公司雇佣了程序员Brendan Eich花10天开发这种网页脚本语言，希望开发出一个类似 Java 的脚本语言，用来提升浏览器的展示效果，增强动态交互能力。结果大佬喝着啤酒抽着烟，十来天就把这个脚本语言写出来了，功能很强大，就是语法一点都不像 Java。最初叫Mocha，9月更名为livescriplt，12月与Sun公司达成协议，叫Javascript。这样就渐渐形成了前端的雏形：HTML 为骨架，CSS 为外貌，JavaScript 为交互。

[![img](https://ftp.bmp.ovh/imgs/2019/11/265d834a0b0a5054.jpeg)](https://ftp.bmp.ovh/imgs/2019/11/265d834a0b0a5054.jpeg)

同时期微软等一些公司也针对自家浏览器开发出了自己的脚本语言。浏览器五花八门，虽然有了比较统一的 ECMA 标准，但是浏览器先于标准在市场上流行开来，成为了事实标准。导致，现在前端工程师还要在做一些政府古老项目的时候，还要去处理浏览器兼容（万恶的 IE 系列）。

ECMAScript版本：
1.ECMAScript第一版是根据Netscape发布的JavaScript1.1 指定的，本质上与JavaScript1.1相同， 只是删除了所有针对Netscape浏览器特有的代码，以及做了一些小改动

2.ECMAScript第二版主要是对第一版的编辑加工，没有做任何的新增，修改，删除

3.ECMAScript第三版才算是对ECMAScript的第一次真正修改，修改的内容涉及字符串处理，错误处理和数值输 出，这一版还新增了对正则表达式，控制语句等的支持

4.ECMAScript第四版因为改动太大而流产，同时出现了ECMAScript3.1的替代性提案

5.因为第四版流产，ECMAScript3.1作为了ECMAScript第5版发布，此版本新增了一些新功能，比如原生的JSON对象， 继承的方法，并且消除了第三版中存在的一些歧义

6.基于流产的第四版并且经过多年的重新打磨与完善，全新的ES2015年闪亮登场，从此ES开始改为以年份命名，比如现在的ES2016，ES2017。ES6是ES2015以及之后ECMAScript的统称。