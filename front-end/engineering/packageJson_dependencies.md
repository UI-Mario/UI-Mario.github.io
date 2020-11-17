> [yarn](https://classic.yarnpkg.com/en/docs/dependency-types/)
>
> https://github.com/SamHwang1990/blog/issues/7

- dependencies
- devdependencies
- peerdependencies
- optionaldependencies
- bundleddependencies

<div style="width: 100px;height: 100px;background-color: bisque;display: flex;justify-content: center;align-items: center;flex-direction: column;">
      A
      <div style="width: 40px;height: 40px;background-color: beige;display: flex;justify-content: center;align-items: center;">B</div>
    </div>

# dependencies

跑代码所需的第三方库，像是react，redux，router

# devdependencies

开发模式下需要依赖的第三方库，像是测试、eslint、babel、webpack，具体可见第二个引用网址，这里相关代码量不够，总结不出来

# peerdependencies

> Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.

比较神奇☝️

如果上图B里面`peerdependencies`有`lodash`，那么A的`dependencies`也必须的有相同的`lodash`。

神奇点在于，`npm install`不会去安装`lodash`，但是在B里面可以用`lodash`

**question:**

- `peerdependencies`里的第三方库能否自己使用？
- 三方库版本啥的起冲突咋办？
- 是否会主动下载`peerdependencies`里的三方库？

# optionaldependencies

顾名思义，可选的依赖，指的是，即使在`npm install`时，该依赖安装失败，`install`命令依然可以继续，不需要抛错误终端。

# bundleddependencies

当处于开发模式时，`bundleDependencies`节点的功能跟`dependencies`节点是一样的，区别在于，当需要构建项目并发布版本时，`bundleDependencies`节点下的依赖会被包含在构建结果中，不需要另外`npm install`来安装了。

**question:**

- 那我又装一个`bundleDependencies`已经有的依赖项，起冲突吗？（估计不会，也没去验证）