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

## 非空断言符

> TS 3.7 版本正式支持使用

```typescript
let root: any = document.getElementById('root');
root.style.color = 'red';

let root2: (HTMLElement | null) = document.getElementById('root');
// 非空断言操作符--> 这样写只是为了骗过编译器，防止编译的时候报错，打包后的代码可能还是会报错
root2!.style.color = 'red';
```

## 空值合并运算符(??)的使用

- **TS 3.7版本正式支持使用**
- **`||` 运算符的缺点：** 当左侧表达式的结果是数字 0 或空字符串时，会被视为 `false`。
- **空值合并运算符：只有左侧表达式结果为 `null` 或 `undefined` 时**，才会返回右侧表达式的结果。**通过这种方式可以明确地区分 `undefined、null` 与 `false` 的值**。

```
const data = {
    str:'',
    // num:0,
    flag:false,
    // flag: null,
};

// data.str 为 "" 时
let str1 = data.str || '空' // '空'
// data.num 为 0 时
let num1 =  data.num || 666 // 666
// data.flag 为 false 时
let status1 =  data.flag || true  // true


// data.str 为 "" 时，可以通过。仅在 str 为 undefined 或者 null 时，不可以通过
let st2r = data.str ?? '空';  
// data.num 为 0 时，可以通过。仅在 num 为 undefined 或者 null 时，不可以通过
let num2 = data.num ?? 666; 
// data.flag 为 false 时，可以通过。仅在 flag 为 undefined 或者 null 时，不可以通过
let status2 = data.flag ?? true;

console.log('str=>', str2);
console.log('num=>', num2);
console.log('status=>', status2);
```

## typeof class 和直接用 class 作为类型有什么区别

> 类/实例

```
class Greeter {
    static message = 'hello';

    greet(){
        return Greeter.message;
    }
}

// 获取的是实例的类型，该类型可以获取实例对象上的属性/方法
let greeter1:Greeter = new Greeter();
console.log(greeter1.greet());// 'hello'


// 获取的是类的类型，该类型可以获取类上面的静态属性/方法
let greeterTwo:typeof Greeter = Greeter;
greeterTwo.message = 'hey';

let greeter2:Greeter = new greeterTwo();
console.log(greeter2.greet());// 'hey'
```

##  [TS 中的 never 类型具体有什么用？](https://www.zhihu.com/question/354601204/answer/888551021)

## never

抛出异常或者根本没法结束执行，暂时我也很迷这是干啥的