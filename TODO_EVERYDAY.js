// 2020/09/02
// practice to write myself "new"
// want todo:
// use my server  ------- n
// build my cli --------- n
// learn net safety------ tomorrow

// 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
// 然后内部创建一个空对象 obj
// 因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeOf 将两者联系起来。这段代码等同于 obj.__proto__ = Con.prototype
// 将 obj 绑定到构造函数上，并且传入剩余的参数
// 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值

function myNew(Con, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  const result = Con.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// 2020/09/03
// learn redux---------- tomorrow
// learn net security:CORS------y
// want todo:
// heapsort ------------ y
// use my server  ------ n
// build my cli -------- n
var arr = [1, 5, 6, 8, 4, 2, 7, 3, 9, 10, 13];

const heapSort = (arr) => {
  heap_root(arr);
  for (var i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    max_heapfy(arr, 0, i); //不一定要整棵树排好序，保证顶部就好
  }
};

const max_heapfy = (arr, index, length) => {
  while (true) {
    let largest = index;
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    if (leftChild < length && arr[leftChild] > arr[largest]) {
      largest = leftChild;
    }
    if (rightChild < length && arr[rightChild] > arr[largest]) {
      largest = rightChild;
    }
    if (largest === index) {
      break;
    }
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    index = largest;
  }
};

const heap_root = (arr) => {
  for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
    max_heapfy(arr, i, arr.length);
  }
};

// 2020/09/04
// learn redux----------
// learn binary tree --- { DFS }
// want todo:
// use my server  ------ n
// build my cli -------- n

// sorry, lying on bed and do nothing

// 2020/9/07
// learn redux----------
// learn binary tree --- { DFS } y
// learn typescript----- wtf type declare namespace???
// learn Reg------------
// react+ts video-------
// write essay: mac地址-- doesn`t matter
// want todo:
// use my server  ------ n
// build my cli -------- n

function DFS(root) {
  if (!root) {
    return;
  }
  DFS(root.left);
  DFS(root.right);
  // 这里再保存一下root.val就是前序/后序/中序遍历
}

// 2020/9/09
// learn redux----------
// react+ts video-------
// leetcode------------- y
// want todo:
// use my server  ------ n
// build my cli -------- n

// 2020/9/10
// learn redux----------
// react+ts video------- bili(), youtube
// reading everyday-----
// write ---------------{MVC,MVVC,[call,apply,bind], primose, compiler}
// leetcode------------- y
// want todo:
// use my server  ------ n
// build my cli -------- n

// 2020/9/11

// 2020/9/26
// learn redux---------- history, vuex?, own redux
// leetcode-------------
// write---------------- {MVC, MVVM}

// 2020/9/27
// chrome 打断点，调试---- bili上有视频，漏的地方可以查资料
// leetcode-------------
// react hooks----------
// do this nearly by copy, rewrite it
var permute = function (nums) {
  if (!nums.length) return;
  var res = [];
  var path = [];
  var usedId = new Set();
  dfs(nums, 0, path, usedId, res);
  return res;
};

var dfs = (nums, depth, path, usedId, res) => {
  if (depth === nums.length) {
    res.push(path.concat());
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    if (usedId.has(i)) continue;
    path.push(nums[i]);
    usedId.add(i);
    dfs(nums, depth + 1, path, usedId, res);
    usedId.delete(i);
    path.pop();
  }
  return res;
};

// 2020/10/9
// learn website:
// https://github.com/sisterAn/blog
// https://egghead.io/

// 2020/10/10
// dfs构建的bfs
var levelOrderBottom = function (root) {
  const res = [];
  var dep = function (node, depth) {
    if (!node) return;
    res[depth] = res[depth] || [];
    res[depth].push(node.val);
    dep(node.left, depth + 1);
    dep(node.right, depth + 1);
  };
  dep(root, 0);
  return res.reverse();
};

// 不使用递归的dfs，TODO:还不太理解，移步leetcode的动画演示：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

// string -> 整数
filterInt = function (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};

// 模块化，hook，redux，ref

// 2020/10/30
// 写了段时间回溯，代码风格基本如下：
const main = (nums) => {
  var res = [];
  var path = [];
  var useId = []; // 或是var start = 0;
  temp(res, path, nums, useId);
  return res;
};

const temp = (res, path, nums, useId) => {
  if (path === "满足的条件") {
    res.push([...path]);
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    if (useId.includes(i)) continue;
    path.push(nums[i]);
    useId.push(i);
    temp(res, path, nums, useId);
    path.pop();
    useId.pop();
  }
};

// 结果在leetcode被教育了
// 个人也觉得这段时间的回溯太套路化，
// 本来想着回溯差不多就刷dp，还是太年轻
// 题号：39

// cookie, diff, ref, 39

// 39还没看，动态规划和树入门题有点少没啥感觉，接下来先看看
// 别人的博客啥的，找找灵感
// leetcode_num：127

// TODO:cookie, fiber->reconciliation->diff, webgl, tsjson, cors, ts装饰器
// md怎么这么多要学

// 2020/11/6 开始手写，争取每天一个

// TODO:fiber->reconciliation->diff, webgl, cors, ts装饰器

// TODO:39，看懂了，但还是需要慢慢消化
// FIXME:在接着刷40的时候发现了39下列代码的大锅，当我没说过上述的话
var combinationSum2 = function (candidates, target) {
  const res = [];
  dfs(res, target, candidates, [], 0);
  return res;
};
// 可以这么认为，其实是每个排列，只能添加，排列头部数字后面的数字（例如candidates[2,3,6,7]，某个排列以6开头，则只能添加7）
// 但是可以不断添加自己
const dfs = (res, target, candidates, combine, start) => {
  if (target === 0) {
    res.push([...combine]);
    return;
  }
  if (start === candidates.length) {
    return;
  }
  if (target - candidates[start] >= 0) {
    dfs(
      res,
      target - candidates[start],
      candidates,
      [...combine, candidates[start]],
      start
    );
  }
  dfs(res, target, candidates, combine, start + 1);
};

// 还是39，睡觉前灵机一闪，好像把场子找回来了
var combinationSum = function (candidates, target) {
  const res = [];
  const path = [];
  temp(res, path, candidates, target, 0);
  return res;
};

const getSum = (nums) => {
  return nums.reduce((prev, cur) => prev + cur, 0);
};

const temp = (res, path, candidates, target, start) => {
  if (getSum(path) === target) {
    res.push([...path]);
    return;
  }
  if (target - getSum(path) - candidates[start] >= 0) {
    path.push(candidates[start]);
    temp(res, path, candidates, target, start);
    path.pop();
  }
  start + 1 < candidates.length &&
    temp(res, path, candidates, target, start + 1);
};
// 但是又被40题教育了，虽然做出来了，但是5%的排名。。。
// 耗尽心力改成了10%，如下
var combinationSum2 = function (candidates, target) {
  const res = [];
  const path = [];
  const last_path = [];
  candidates.sort((a, b) => a - b);
  // [1,2,2,2,3,5]
  temp(res, path, last_path, candidates, target, 0);
  return res;
};

const getSum = (nums) => {
  return nums.reduce((prev, cur) => prev + cur, 0);
};

const temp = (res, path, last_path, candidates, target, start) => {
  if (getSum(path) === target) {
    res.push([...path]);
    return;
  }
  for (var i = start; i < candidates.length; i++) {
    if (
      candidates[i] &&
      candidates[i - 1] &&
      candidates[i] === candidates[i - 1] &&
      JSON.stringify([...path, candidates[i]]) === JSON.stringify(last_path)
    )
      continue;
    if (target - getSum(path) - candidates[i] >= 0) {
      path.push(candidates[i]);
      last_path = [...path];
      temp(res, path, last_path, candidates, target, i + 1);
      path.pop();
    }
  }
};

// fiber->reconciliation->diff, webgl, cors, ts装饰器
// 修改目标，这段时间还是先看js手写和运用react库或是webpack吧，源码先放放
// 没有技术积累感觉顺序不对
// Unicode, ASCII --------- y
// 读完了，没必要做笔记，建议阅读阮一峰大佬：http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html

// TODO:
// fiber->reconciliation->diff,
// webgl/three.js
// cors, 就是面向面试的资料整理，😡
// ts装饰器
// NODE_ENV怎么挂在process.env上的
// react portal
// useful article: https://www.zhihu.com/question/20790576/answer/32602154

// 持续目标：树，图，react相关源码，最近说实话有点迷茫和懈怠

// https://overreacted.io/zh-hans/why-do-hooks-rely-on-call-order/

// TODO:
// ts:infer,decorator,<U,T>
// react-----source code, lifecircle, hook to imitate lifecircle
// redux-----source code
// react-redux---source code
// webgl

// 节流
// 运行完了才能继续运行下一个
const myThrottle = (fn, time) => {
  let isRunning = false;
  return () => {
    if (!isRunning) {
      isRunning = true;
      setTimeout(() => {
        fn();
        isRunning = false;
      }, time);
    }
  };
};

// 防抖
// 要是持续触发会持续更新定时器
const myDebounce = (fn, time) => {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, time);
  };
};

// 洗牌算法
// 忘了叫啥，意思是从未处理的数组中随机抽取，添加到新数组
// 直到抽完
const shuffle = (arr) => {
  if (arr.length === 0) return [];
  const random_index = Math.floor(Math.random() * arr.length);
  console.log(arr);
  const random_item = arr.splice(random_index, 1);
  return [random_item, ...shuffle(arr)];
};

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// reduce
// 非严格按照标准来
// 目前只是按着自己理解写的，大体上没啥问题
const myReduce = (arr, callbackFn, initialValue) => {
  if (arr.length === 0) throw new Error("empty array");
  if (arr.length === 1) {
    if (initialValue) {
      return callbackFn(initialValue, arr[0]);
    } else {
      return arr[0];
    }
  }

  var accumulator = null;
  var index = null;
  if (initialValue) {
    accumulator = initialValue;
    index = 0;
  } else {
    accumulator = arr[0];
    index = 1;
  }
  for (var i = index; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i]);
  }
  return accumulator;
};

const callbackFn = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

console.log(myReduce([1], (a, b) => a + b, 100));

console.log([1].reduce((a, b) => a + b, 100));

// 浏览器大荟萃：https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/

// 今天可以读的：https://github.com/lf2021/Front-End-Interview/blob/master/01.%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8.md

// TODO:AMD, CMD, ...

// call stack, memory heap, run-time:
// https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf

// event loop
// https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5
// 当call stack is clear， 从callback queue/event queue拿东西放进call stack
// 当然，es6的promise出现后，queue就分为microtask和macrotask了，或者叫job啥的，贼乱
// Rendering never happens while the engine executes a task. It doesn’t matter
// if the task takes a long time. Changes to the DOM are painted only after the task is complete.
// TODO:意思是否就是，setTimeout的时间点对应的事件是什么呢？它也非要等call stack空了才能放进去吗？

// TODO:
// Net:
// - 3握4挥
// - 从上往下特点、优缺点、版本
// Algorithms:
// - dynamic
// Frame:
// - react event, lifecircle redux,
// JS:
// - prototype, create Class, typescript
// Web:
// - cookie, localstorage, session...
// https://juejin.cn/post/6908698827033837575#heading-18
// - 浏览器渲染流程
// 手写:new, extends, this, promise, clone, async,await
// - new:
// -- new就是那一个函数作为构造函数，原型链绑上，this绑上，没有返回对象就返回this

// ------------------------------------New---------------------------------------
function newOperator(func) {
  const obj = Object.create(func.prototype);
  // 这种写法就不能用箭头函数了
  const argsArr = [...arguments]
  argsArr.shift()
  const result = func.apply(obj, argsArr);
  if ((typeof result === "object" && result) || typeof result === "function") {
    return result;
  } else {
    return obj;
  }
};

// test---------------------------
function Student(name, age){
    this.name = name;
    this.age = age;
}
Student.prototype.doSth = function() {
    return this.name;
};
var student1 = newOperator(Student, 'Rose', 18);
var student2 = newOperator(Student, 'Jack', 18);

console.log('student1', student1.doSth());
console.log('student2', student2.doSth());

console.log(student1.__proto__ === Student.prototype); // true
console.log(student2.__proto__ === Student.prototype); // true
// __proto__ 是浏览器实现的查看原型方案。
// 用ES5 则是：
Object.getPrototypeOf(student1) === Student.prototype; // true
Object.getPrototypeOf(student2) === Student.prototype; // true

// -------------------------------call, apply, bind-------------------------
// 一通百通，先来看call的用法
function greet() {
  this.name = 'greet'
  this.getName = function() {
    console.log(this.name);
  }
}

var obj = function () {
  this.name = 'obj'
}

name = 'window' // 不加var啥的，就挂在了全局上

new greet().getName();
new greet().getName.call(obj);
new greet().getName.call();  // 非严格模式指向window、global等全局对象，严格模式下指向null、undefined

// call函数声明：function.call(thisArg, arg1, arg2, ...)
// 返回值：使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。
/**
 * @description 自定义call实现
 * @param context   上下文this对象
 * @param args  动态参数
 */
Function.prototype.myCall = function(context, ...args) {
  // 这里还要分严格模式非严格模式，以及node下全局对象是global，浏览器下是window
  context = (context instanceof Object ? context : global)
  // 防止覆盖掉原有属性
  // 有意思吧，object除了字符串还可以接受Symbol作为键名
  // 延展思想，set, map, weakSet, weakMap
  // - set
  // set可以add基础类型自动规避重复，但是对于引用类型，只是比较指针，不递归比较啥的
  // 毒瘤NaN也可以被规避
  // - weakset
  // 一个感觉没啥用的东西，相比set没有新功能，就是只能放对象
  // 只有一点需要注意：
  // 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
  // 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，
  // 不考虑该对象还存在于 WeakSet 之中
  // 其实总结起来一句话：其次，WeakSet的键名所指向的对象，不计入垃圾回收机制。
  // - map
  // obj垃圾只能接受string和symbol作为键名，但map啥都行
  // 但是不幸的是，看代码
  // const key = {a: 1}
  // map.set(key, 'value')
  // map.get(key)  可以成功
  // map.get({a: 1})  失败
  // - weakmap
  // 同weakset，懒得写
  const key = Symbol()
  // 这里的this为需要执行的方法
  // 啥意思，this是sayHello吗，就是在传进来的this对象里挂上了个方法？
  // TODO:至今还没懂this为啥就变成函数了
  context[key] = this 
  // 方法执行
  const result = context[key](...args)
  delete context[key]
  return result
}

/**
 * @description 跟call唯一的差别就在于args参数接受形式不一样，不赘述了
 * @param {any} context 
 * @param {any[]} args, 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数
 */
Function.prototype.myApply = function(context, args) {
  context = context instanceof Object ? context : global;
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

// bind也不想赘述了，留个空白等待自己瞎想或者后面更好地填补

// -------------------------------clone--------------------------------------
// 目前只能瞎掰呼递归啥的，lodash没看懂

// -------------------------------promise--------------------------------------

// -------------------------------async,await--------------------------------------

// life-circle, hook, why not safe
// browser render
// net
// amd, cmd...

