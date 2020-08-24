# 跨域

这个问题本来在vue-cli里是可以很优雅的解决的，但是由于本人缺乏相关经验和知识，愣是被浪费了一个下午，怒而提笔

重点提一下版本：vue-cli3.x

## 思路

先来讲讲这篇文章能帮你干什么

假如你有一个api，本文中所举栗子是`http://api.bilibili.cn/recommend`，这是一个死数据接口，但是很合适用来讲解。但是你不能直接用`axios`或者`fetch`获取api里的数据，例如

```
axios
  .get('`http://api.bilibili.cn/recommend`')
  .then(res => {
    console.log(res.data)
  })
  .catch(() => {
    console.log('error')
  })
```

会报错，所以你需要在vue-cli3.x里进行设置，步骤如下

创建一个`vue.config.js`的文件，与`package.json`位于同一目录，用来设置代理

代码如下

```
vue.config.js
```

```
module.exports = {
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  // lintOnSave: false, //是否开启eslint
  devServer: {
    host: 'localhost',
    port: '8081',
    https: false, //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/v2': {
        target: 'http://api.bilibili.cn',
        changeOrigin: true,//这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里								面的host，但是不会修改别的
        //ws: true,  //如果要代理 websockets，配置这个参数
        //secure: false,  // 如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/v2': ''  //替换规则，配置是正则表达式
        }
      }
    },
  }
};
某个.vue文件里的代码
```

```
<template>
...
</template>

<script>
...
import axios from 'axios'

export default {
...
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      axios
        .get('/v2/recommend')    //调用axios
        .then(res => {
          console.log(res.data)
        })
        .catch(() => {
          console.log('error')
        })
    }
  }
}
</script>
```

至此，跨域就成功了。当然，换一个api这个代码肯定就失败了，所以下面就对这上面的代码进行讲解。

首先讲讲`vue.config.js`，它的核心部分其实就是`proxy`那段

```
proxy: {
  '/v2': {
    target: 'http://api.bilibili.cn',
    changeOrigin: true,//这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里								面的host，但是不会修改别的
    //ws: true,  //如果要代理 websockets，配置这个参数
    //secure: false,  // 如果是https接口，需要配置这个参数
    pathRewrite: {
      '^/v2': ''  //替换规则，配置是正则表达式
    }
  }
},
```

这段代码干了什么呢，首先看`/v2`，很明显这是一个url的一部分；它从哪来，当然是从调用`axios`时输入的url来，本文中它的来源是

```
.get('/v2/recommend')
```

他的意思就是找到你输入的url的某个位置，本文中是`v2`，然后通过`target`和`changeOrigin`把url变成这种形式`http://api.bilibili.cn/v2/recommend`

对于部分api，这种变化呢其实就可以解决问题了，从原始的`https://localhost:8081/v2/recommend`变成了`http://api.bilibili.cn/v2/recommend`，但由于有的api就缺这么个定位的`v2`，例如本文中的api：`http://api.bilibili.cn/recommend`，所以后面就用`pathRewrite`来抹掉`v2`，把它匹配成空字符。

所以有的时候这里`proxy`的写法可能千奇百怪，但其实那个`v2`一点都不重要，就是用来定位的，重要的是你`target`和`axios.get()`里的url必须写对。

**附带**：网上搜了很多博客，清一色的`proxyTable:`而不是`proxy:`，本文中两者间不能进行替换，大概是vue-cli2.x和vue-cli3.x的锅吧。

# 路由传参

两种方式：

1. query（传一个对象）
2. params+动态路由（传变量）

TODO:

# 路由嵌套

把组件里写了个路由嵌套，结果组件被渲染两次，查找原因中