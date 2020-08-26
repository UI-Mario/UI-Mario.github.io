- Typescript只会在编译时对类型进行静态检查，如果发现有错误，编译时会报错。而在运行时，ts与js一样，不会对类型进行检查，所以有如下代码：

```typescript
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));
```

- Typescript编译时即使报错，还是会生成编译结果，及js文件
- 与js不同，ts可以赋给变量undefined值，以及指定函数void。对于未声明类型的变量，会被识别成any
- Typescript中的=>与es6中的=>不是一个，在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

```ts
let mySum = function (x: number, y: number): number {
    return x + y;
};
```

这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 `mySum`，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 `mySum` 添加类型，则应该是这样：

```ts
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

