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
// 结合动画可以理解，动画一忘就不会了
// 中序遍历
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

// 甲：除非李去，否则王不去
// 乙：李和周来自不同部门，他们两个应该都参加。
// 丙：如果张不去，那么王一定参加
// 丁：周参加或者张不参加

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
// -- new就是那一个函数作为构造函数，原型链绑上，this绑上，构造函数没有返回对象就返回this

// ------------------------------------New---------------------------------------
function newOperator(func) {
  const obj = Object.create(func.prototype);
  // 这种写法就不能用箭头函数了
  const argsArr = [...arguments];
  argsArr.shift();
  const result = func.apply(obj, argsArr);
  if ((typeof result === "object" && result) || typeof result === "function") {
    return result;
  } else {
    return obj;
  }
}

// test---------------------------
function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.doSth = function () {
  return this.name;
};
var student1 = newOperator(Student, "Rose", 18);
var student2 = newOperator(Student, "Jack", 18);

console.log("student1", student1.doSth());
console.log("student2", student2.doSth());

console.log(student1.__proto__ === Student.prototype); // true
console.log(student2.__proto__ === Student.prototype); // true
// __proto__ 是浏览器实现的查看原型方案。
// 用ES5 则是：
Object.getPrototypeOf(student1) === Student.prototype; // true
Object.getPrototypeOf(student2) === Student.prototype; // true

// -------------------------------call, apply, bind-------------------------
// 一通百通，先来看call的用法
function greet() {
  this.name = "greet";
  this.getName = function () {
    console.log(this.name);
  };
}

var obj = function () {
  this.name = "obj";
};

name = "window"; // 不加var啥的，就挂在了全局上

new greet().getName();
new greet().getName.call(obj);
new greet().getName.call(); // 非严格模式指向window、global等全局对象，严格模式下指向null、undefined

// call函数声明：function.call(thisArg, arg1, arg2, ...)
// 返回值：使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。
/**
 * @description 自定义call实现
 * @param context   上下文this对象
 * @param args  动态参数
 */
Function.prototype.myCall = function (context, ...args) {
  // 这里还要分严格模式非严格模式，以及node下全局对象是global，浏览器下是window
  context = context instanceof Object ? context : global;
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
  const key = Symbol();
  // 这里的this为需要执行的方法
  // 啥意思，this是sayHello吗，就是在传进来的this对象里挂上了个方法？
  // TODO:至今还没懂this为啥就变成函数了
  context[key] = this;
  // 方法执行
  const result = context[key](...args);
  delete context[key];
  return result;
};

/**
 * @description 跟call唯一的差别就在于args参数接受形式不一样，不赘述了
 * @param {any} context
 * @param {any[]} args, 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数
 */
Function.prototype.myApply = function (context, args) {
  context = context instanceof Object ? context : global;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

// bind也不想赘述了，留个空白等待自己瞎想或者后面更好地填补

// -------------------------------clone--------------------------------------
// 目前只能瞎掰呼递归啥的，lodash没看懂
// TODO:循环引用问题，之前没有关注，这里引用hash表解决

// 循环引用
{
  let obj = { val: 100 };
  obj.target = obj;
}

const isObject = (obj) => typeof obj === "object" && obj;

// hash表，默认值为空
const deepClone = (target, hash = new WeakMap()) => {
  if (hash.has(target)) {
    return hash.get(target); // 查哈希表
  }
  if (isObject(target)) {
    const newObj = Array.isArray(target) ? [] : {};
    hash.set(target, newObj); // 哈希表设值
    // TODO:错了，值不是随便设，具体请见输出
    // TODO:Symbol
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        if (isObject(target[key])) {
          newObj[key] = deepClone(target[key], hash); // 传入哈希表
        } else {
          newObj[key] = target[key];
        }
      }
    }
    return newObj;
  } else {
    return target;
  }
};

var a = {
  name: "Libai",
  book: {
    title: "You Don't Know JS",
    price: "45",
  },
  a1: undefined,
  a2: null,
  a3: 123,
};
a.target = a;
console.log(deepClone(a));

// -------------------------------promise--------------------------------------

// -------------------------------async,await--------------------------------------

// life-circle, hook, why not safe
// browser render
// net
// amd, cmd...

// 对于objec的own属性(property)，原型链上的属性，可枚举(enumerable)和不可枚举属性
// https://wsydxiangwang.github.io/web/Object/4.html#%E6%94%B9%E5%8F%98%E5%B1%9E%E6%80%A7%E5%8F%AF%E6%9E%9A%E4%B8%BE%E6%80%A7

const myInstaceof = (left, right) => {
  if (typeof left !== "object" && typeof left !== "function") return false;
  while (left) {
    const next = Object.getPrototypeOf(left);
    if (next === right.prototype) return true;
    left = next;
  }
  return false;
};

// Object.is()相比 === 的优点
// 1.可以实现 NaN equals NaN
// 2.可以实现 +0 equals -0

let a = [
  { time: 1 },
  { time: 5 },
  { time: 8 },
  { time: 11 },
  { time: 16 },
  { time: 17 },
  { time: 29 },
  { time: 34 },
  { time: 39 },
];

const time_line = [3, 7, 12, 17, 19, 31, 40];

const getValidNums = (a, time_line) => {
  const a_times = a.sort((a, b) => a.time - b.time).map((item) => item.time);
  const result = [];
  const usedId = [];

  for (let i = 0; i < time_line.length; i++) {
    // 当a里的time用尽后，添加对象
    if (usedId.length === a.length) {
      result.push({});
      continue;
    }
    findNearestTarget(result, usedId, a_times, time_line[i]);
  }
  // time_line为空返回空数组
  return result;
};

// 二分查找
const findNearestTarget = (result, usedId, a, target) => {
  let mid;
  let left_index = 0;
  let right_index = a.length - 1;
  while (right_index - left_index > 1) {
    mid = Math.floor((left_index + right_index) / 2);
    if (target < a[mid]) {
      right_index = mid;
    } else {
      left_index = mid;
    }
  }
  while (usedId.includes(left_index)) {
    left_index--;
  }
  while (usedId.includes(right_index)) {
    right_index++;
  }

  const left = left_index < 0 ? Infinity : target - a[left_index];
  const right = right_index >= a.length ? Infinity : a[right_index] - target;
  result.push(
    getFormatObject(target, left < right ? a[left_index] : a[right_index])
  );
};

const getFormatObject = (line, time) => {
  return {
    line: line,
    time: time,
  };
};

console.log(getValidNums(a, time_line));
// 浏览器事件

// cookie, session, localstorage, webstorage, sessionstorage
// - cookie：cookie一般是被浏览器以txt的形式存储在电脑硬盘中，供该浏览器进行读、写操作
// - session, token => https://juejin.cn/post/6906009986149646343#heading-8
//                     session和token都是为了保持连接的状态所生成的一个签名
//                     Session： 当服务器接收到请求时，就从存储在服务器上的无数session信息中去查找客户端请求时带过来的cookie的状态。
//                                如果服务器中没有这条session信息则添加一条session信息。
//                                通常Cookie中存的是session信息经过计算后的唯一Id（sessionId）。
//                     区别在于，session只是个唯一标识，token是根据用户的信息生成的，
//                     有JWT(JSON Web Token)规范
//                     而且token的解密只能由特定服务器进行
// - webstorage, sessionstorage, localstorage
//                     webstorage的两种机制：localstorage, sessionstorage
//
// localStorage, sessionStorage
// 相同点：
//       1.大小都为5M
//       2.都受同源策略限制
//       3.都以key-value的形式存储，只能接受字符串作为key
//       4.仅在客户端进行存储，不会跟随http请求
// 不同点：
//       1.生命周期
//         - localstorage，数据永久存在（基于本地文件系统），除非用户手动清除
//         - sessionStorage，存储的数据在当前会话结束时会被清除，一旦窗口或者标签页被关闭，那么所有通过 sessionStorage 存储的数据也会被删除。
//       2.作用域
//         - localstorage，在同源、同浏览器的时候，共享数据，可以相互清除、覆盖、修改？？？
//         - sessionStorage，一样需要同一浏览器同源文档这一条件。除此之外 sessionStorage
//                           的作用域还被限定在了窗口（标签页）中，也就是说，只有同一浏览器、同一窗口的同源文档
//                           才能共享数据(同浏览器限制、同源限制、同标签页限制)

const threeHoursLater = (date) => {
  if (!isDateLegal(date)) {
    throw new Error("range error");
  }
  if (isWeekend(date)) {
    while (isWeekend(date)) {
      date.setDate(date.getDate() + 1);
    }
    date.setHours(12, 0, 0);
    console.log(date.toLocaleString());
    return;
  } else {
    if (date.getHours() < 8) {
      date.setHours(12, 0, 0);
      console.log(date.toLocaleString());
      return;
    } else if (date.getHours() < 12) {
      if (
        date.getHours() < 9 ||
        (date.getHours() === 9 &&
          date.getMinutes() === 0 &&
          date.getSeconds() === 0)
      ) {
        date.setHours(date.getHours() + 3);
        console.log(date.toLocaleString());
        return;
      } else {
        date.setHours(
          5 + date.getHours(),
          date.getMinutes(),
          date.getSeconds()
        );
        console.log(date.toLocaleString());
        return;
      }
    } else if (date.getHours() < 14) {
      date.setHours(17, 0, 0);
      console.log(date.toLocaleString());
      return;
    } else if (date.getHours() < 18) {
      if (
        date.getHours() < 15 ||
        (date.getHours() === 15 &&
          date.getMinutes() === 0 &&
          date.getSeconds() === 0)
      ) {
        date.setHours(date.getHours() + 3);
        console.log(date.toLocaleString());
        return;
      } else {
        date.setDate(date.getDate() + 1);
        while (isWeekend(date)) {
          date.setDate(date.getDate() + 1);
        }
        date.setHours(8 + date.getHours() - 15);
        console.log(date.toLocaleString());
        return;
      }
    } else {
      date.setDate(date.getDate() + 1);
      date.setHours(8, 0, 0);
      threeHoursLater(date);
    }
  }
};

const isDateLegal = (date) => {
  const startDate = new Date("1900-01-01 00:00:00");
  const endDate = new Date("2050-01-01 00:00:00");
  return date >= startDate && date <= endDate;
};

const isWeekend = (date) => {
  return date.getDay() === 6 || date.getDay() === 0;
};

const getOutPut = (date) => {
  return;
};

// 浏览器线程：
// GUI 渲染线程
// JavaScript引擎线程
// 定时触发器线程
// 事件触发线程
// 异步http请求线程

// Browser Process：
// 1.浏览器的主进程（负责协调、主控）
// （1）负责包括地址栏，书签栏，前进后退按钮等部分的工作
// （2）负责处理浏览器的一些不可见的底层操作，比如网络请求和文件访问
// （3）负责各个页面的管理，创建和销毁其他进程
// 2.Renderer Process
// 负责一个 tab 内关于网页呈现的所有事情，页面渲染，脚本执行，事件处理等
// 3.Plugin Process
// 负责控制一个网页用到的所有插件，如 flash
// 每种类型的插件对应一个进程，仅当使用该插件时才创建
// 4.GPU Process
// 负责处理 GPU 相关的任务

// xss, 缓存

// XSS漏洞的原理是，由于未对用户提交的表单数据或者url参数等数据做处理就显示在了页面上，导致用户提交的内容在页面上被做为html解析执行。
// 常规方案：对特殊字符进行处理，如"<"和">"等进行转义。

// CSRF，中文名叫跨站请求伪造，原理是，用户登陆了A网站，然后因为某些原因访问了B网站（比如跳转等），
// B网站直接发送一个A网站的请求进行一些危险操作，由于A网站处于登陆状态，就发生了CSRF攻击
// （核心就是利用了cookie信息可以被跨站携带）！


// const flatObj = (obj, key = "", newObj = {}) => {
//   for (let index in obj) {
//     let tempKey = Array.isArray(obj)
//       ? key + "[" + index + "]"
//       : key + index + ".";
//     if (typeof obj[index] === "object" && obj[index]) {
//       flatObj(obj[index], tempKey, newObj);
//     } else {
//       newObj[tempKey] = obj[index];
//     }
//   }
//   return newObj;
// };

// this:
// 作为对象的方法调用，指向对象
// 作为普通函数调用，指向全局对象
// 作为构造器调用，指向new出的对象
// call, apply, bind

// 流量劫持，promise异常
// 缓存，https，tcp，ip，手写webpack，继承，promise
// 项目：性能优化，
// react: conciliation, fiber, hook
// 我们写的onClick是事件捕获吗？和事件冒泡的顺序是怎么样的
// JS拖拽原理
// cookie的存储有哪些新的属性
// 说一下移动端适配的原理
// setState是同步还是异步？
// setState的回调函数是宏任务还是微任务
// webpack热更新原理
// px to rem的计算原理
// React为什么移除那些生命周期
// react事件机制和原生事件机制

// https://juejin.cn/post/6914823114299817997#heading-4

// 自我介绍
// 面试完你还有什么问题要问的吗
// 你有什么爱好?
// 你最大的优点和缺点是什么?
// 你为什么会选择这个行业，职位?
// 你觉得你适合从事这个岗位吗?
// 你有什么职业规划?
// 你对工资有什么要求?
// 如何看待前端开发？
// 未来三到五年的规划是怎样的？
// 你的项目中技术难点是什么？遇到了什么问题？你是怎么解决的？
// 你们部门的开发流程是怎样的
// 你认为哪个项目做得最好？
// 说下工作中你做过的一些性能优化处理
// 最近在看哪些前端方面的书？
// 平时是如何学习前端开发的？
// 你最有成就感的一件事
// 你为什么要离开前一家公司？
// 你对加班的看法
// 你希望通过这份工作获得什么？



const getMaxNumChar = (str) => {
	const map = new Map()
	let max = 0;
	let res = '';
	for(const item of str) {
		if(map.has(item)) {
			map.set(item, map.get(item) + 1)
		} else {
			map.set(item, 1)
		}
		res = map.get(item) > max ? item : res;
		max = Math.max(map.get(item), max);
 	}
 	return res;
}

console.log(getMaxNumChar('aabbbbbss'))


const transform = (str) => {
	let newStr = ''
	for(var i=0;i<str.length;i++){
		if(i===0 || str[i-1] === '_'){
			newStr += str[i].toUpperCase()
			continue;
		}
		if(str[i]==='_') continue
		newStr += str[i]
	}
	return newStr
}

console.log(transform('make_by_id'))

const reGenerate = (arr) => {
	const newArr = []
	for(var i=0;i<arr.length-1;i++){
		newArr.push(arr[i])
		if(Math.abs(arr[i].time - arr[i+1].time)>3) {
			let count=arr[i].time + 3;
			while(Math.abs(newArr[newArr.length-1].time - arr[i+1].time)>3){
				newArr.push({time:count})
				count +=3
			}
		} 
	}
	return newArr.push(arr[arr.length-1]);
}

console.log(reGenerate([{time:1}, {time:5}, {time: 12}]))

// - 写webpack loader， plugin
// - webpack打包vue，打包过程优化，dll啥的
// - CI/CD自动化, jenkins, github action
// - build own component libary, storyBook, desc, 估计只能发博客当谈资
// - 服务器，这事想了很久，目前还不知道干啥
// - 3d，找件事刷一刷
// 总之就是做点有意思的东西博关注，身边没大佬，靠这个自救


// deno, nest.js, docker


// https://juejin.cn/post/6923071088331227150

// 面试时间及顺序记录，很有借鉴意义
// https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?from=logout&table=tblEnSV2PNAajtWE&view=vew5uodacp

// 封装网络请求+缓存，service worker

// 事件循环，被打脸了https://zhuanlan.zhihu.com/p/100889981

// http://47.103.79.80/dlpdot/manage_template_vue.git
// ljz@szltech.com
// DLkj2021
// https://operation.cdollar.cn/d5/middle/index.html#/login
// https://exmail.qq.com/cgi-bin/loginpage?t=dm_loginpage&dmtype=bizmail&s=session_timeout
// pass: A
// gitlab：a

// https://github.com/pwstrick/daily/blob/master/article/github.md
// https://github.com/dennis-jiang/Front-End-Knowledges
// start to re-study
// 自动化部署，uniapp、vue-router原理，服务器，买本node书

// 多了一个知识来源获取站点https://hacks.mozilla.org/

// 被作用域知识打脸了
function foo() {
  console.log(a); // 2
}
function bar() {
  var a = 3;
  foo();
}
var a = 2;
bar();


// https://cloud.tencent.com/developer/section/1189824


// vue reactivitys
// class Dep {
//     constructor() {
//         this.subscribers = new Set();
//     }
//     depend() {
//         this.subscribers.add(target);
//     }
//     notify() {
//         this.subscribers.forEach(c => c());
//     }
// }

// const data = {
//     price: 10,
//     quantity: 2
// }
// let total = 0
// const target = () => total = data.price * data.quantity

//1.getter/setter=====================================
// Object.keys(data).forEach(key => {
//     let internalValue = data[key];
//     //each property will maintain a dep instance with all the subcription
//     const dep = new Dep();
//     Object.defineProperty(data, key, {
//         get() {
//             dep.depend();
//             return internalValue;
//         },
//         set(newVal) {
//             internalValue = newVal;
//             dep.notify();
//         }
//     })
// });

// target()
// console.log(total)
// data.price = 20
// console.log(total)



// 2.proxy======================================
// const dep = new Dep()
// const proxy = new Proxy(data, {
//   get(target, prop, receiver){
//     dep.depend()
//     return Reflect.get(target, prop, receiver);
//   },
//   set(target, key, value, receiver) {
//     const res = Reflect.set(target, key, value, receiver);
//     dep.notify()
//     return res
//   }
// })

// const target = () => total = proxy.price * proxy.quantity

// target()
// console.log(total)
// console.log(proxy.price)
// proxy.price = 2
// console.log(total)
// proxy.price = 100
// console.log(total)

// promise失败重发
Promise.retry = (fn, maxCount) => {
  const excuteFn = () => {
    return new Promise()
  }
}

// TODO:学到了一个新东西，Performance接口
// 其中performance.navigation里的参数可以显示出
// 网页经过多少次重定向，
// 好吧大意了。通过window.location.href直接改的看不出来

// Q:DomContentLoad和load时期分别对应的什么的时候
// A:
// document.addEventListener("DOMContentLoaded", ready);
// 这篇文章讲得不错https://github.com/fi3ework/blog/issues/3，翻译自http://javascript.info/onload-ondomcontentloaded


// aes加密
// 函数柯里化currying

// token,session.jwt

// promise.resolve真的害人不浅
// Promise.resolve().then(() => {
//   console.log(0);
//   return Promise.resolve(4);
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() => {
//   console.log(6);
// })


//interview question: https://zhuanlan.zhihu.com/p/375326819

// TODO:
// - interview
// - canvas, svg, secure
// - learn video
// - html parser



// esplosion
{/* <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <style>
    body {
  background-color: black;
	overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
	height: 100vh;
	width: 100vw;
}
.firework {
  position: relative;
  top: 0px;
  left: 0px;
	margin: 0px 50px;
}
 .firework .explosion {
  position: absolute;
  top: 0;
  width: 5px;
  height: 20px;
  opacity: 0;
  transform-origin: top center;
	will-change: transform;
  animation: explosion 0.7s linear 3s infinite;
}
 .firework .explosion:nth-child(1) {
          transform: rotate(0deg);
}
 .firework .explosion:nth-child(2) {
          transform: rotate(90deg);
}
 .firework .explosion:nth-child(3) {
          transform: rotate(180deg);
}
 .firework .explosion:nth-child(4) {
          transform: rotate(-90deg);
}
 .firework .explosion:nth-child(5) {
          transform: rotate(45deg);
}
 .firework .explosion:nth-child(6) {
          transform: rotate(-45deg);
}
 .firework .explosion:nth-child(7) {
          transform: rotate(135deg);
}
 .firework .explosion:nth-child(8) {
          transform: rotate(225deg);
}

 .firework .explosion .spark{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	will-change: transform;
	animation: explosion2 0.7s ease-in-out 3s infinite;
}


 .firework .explosion .spark.red {
  background-color: #E91E63;
}
 .firework .explosion .spark.blue {
  background-color: skyblue;
}
 .firework .explosion .spark.green {
  background-color: limegreen;
}
 .firework .explosion .spark.yellow {
  background-color: yellow;
}
 .firework .explosion .spark.purple {
  background-color: purple;
}
@keyframestart{
	0%{
		height: 0px;
		transform: translateY(1000px);
	}
	50%{
		height: 50px;
	}
	75%{
		height: 30px;
	}
	100%{
		height: 0;
		transform: translateY(0);
	}
}
	
@keyframes explosion{
	0%{
		height: 0px;
		opacity: 0;
	}
	50%{
		height: 25px;
		opacity: 1;
	}
	100%{
		height: 0px;
		opacity: 0;
	}
}
@keyframes explosion2{
	0%{
		transform: translateY(0px);
	}
	50%{
		transform: translateY(5px);
	}
	75%{
		transform: translateY(50px);
	}
	100%{
		transform: translateY(70px);
	}
}
  </style>
  <script type="text/javascript">
  </script>
</head>

<body>
  <div class="firework">
    <div class="explosion">
      <div class="spark green"></div>
    </div>
    <div class="explosion">
      <div class="spark blue"></div>
    </div>
    <div class="explosion">
      <div class="spark red"></div>
    </div>
    <div class="explosion">
      <div class="spark red"></div>
    </div>
    <div class="explosion">
      <div class="spark yellow"></div>
    </div>
    <div class="explosion">
      <div class="spark blue"></div>
    </div>
    <div class="explosion">
      <div class="spark green"></div>
    </div>
    <div class="explosion">
      <div class="spark yellow"></div>
    </div>
  </div>
</body>

</html> */}

// 3为什么在4后面
// async function async1() {
//   const result = await async2();
//   console.log(3);
// }

// async function async2() {
//   console.log(2);
// }

// Promise.resolve().then(() => {
//   console.log(4);
// });

// async1();


// JSON.parse(JSON.stringify(arg))的不好(conveat)之处
// 1.速度慢，因为涉及到了Object => JSON的序列化和反序列化
// 2.不支持Date类型，具体可以敲一下代码，Dates will be parsed as Strings
// 3.转化后并不会保存数据的类型(type)，就是说会破坏原型链

// window.addEventListener('error') !== window.onError

// deepClone需要考虑的点
// 1.Date对象，当使用JSON.parse(JSON..)的时候，传过去的值是字符串
// symbol类型
// loop
// typescript type
// custom class

// w3c膨胀了，xhtml2 vs html5, whatwg vs w3c

// js editor & clone

// little trick: console.log`123`

// generator里的yeild可以被for..of..遍历到，普通的func不行
// for..in..，不会遍历到enumerable: false的属性
// iterator, [Symbol.Iterator]
// TODO:改造obj，使for..of..可以遍历
// let range = {
//   from: 1,
//   to: 5,

//   // for..of range calls this method once in the very beginning
//   [Symbol.iterator]() {
//     // ...it returns the iterator object:
//     // onward, for..of works only with that object, asking it for next values
//     return {
//       current: this.from,
//       last: this.to,

//       // next() is called on each iteration by the for..of loop
//       next() {
//         // it should return the value as an object {done:.., value :...}
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   }
// };

// for(let i of range) {
//   console.log(i)
// }


// https://flaviocopes.com/webp/


// xhtml(1,2.0), xml, html, html5, svg, w3c, whatwg, !DOCTYPE之间的爱恨情仇 
// onclick/DOM0    addEventListener('click')/DOM2



// https://nodejs.dev/learn/discover-javascript-timers




