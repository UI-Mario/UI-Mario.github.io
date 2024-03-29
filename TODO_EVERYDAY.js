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

// 这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向web服务器发送数据。
// navigator.sendBeacon(url, data);


// ES6从语法上转换到ES5，babel是可以做到的，但是一些新的api，本身不是语法上不支持，而是ES5的运行环境没有对应的实现；所以babel的一项重要职责就是代码的polyfill。在babel7之前，babel专门提供了一个库叫babel/polyfill来做这件事情，在babel7之后，这个库被废弃了，因为polyfill有了新的使用方式。这也是babel7.x学习的重要内容之一。
// 因为babel在转换过程中，会利用很多babel自己的工具函数：helpers。在不经过优化的时候，每个文件都会单独包含这些helpers代码，如果文件很多，就会导致大量的重复代码，所以babel专门推出了transform-runtime来对这些helpers进行自动提取和其它优化。
// babel对代码的polyfill，是利用另外两个库来做的：core-js和regenerator-runtime。core-js目前升级到了3.x版本，跟2.x区别也很多;regenerator-runtime没有什么变化。core-js@3.x的版本，也值得学习，将来很有可能会直接使用这个库里面的东西，所以需要掌握它是如何组织ES的各个模块实现的。

// 被震惊到的trick
// (2 + 3) >>> 1;

// 据说可以解决ios上的滑动bounce效果
// <preference name="DisallowOverscroll" value="true" />
// 答案：不行

// You can specify a list of images, and they will be used in order, so in the next example, browsers that support WebP will use the first image, and fallback to JPG if not:
// <picture>
//   <source type="image/webp" srcset="image.webp">
//   <img src="image.jpg" alt="An image">
// </picture>

// console.log('hello %s', 'world'),瞬间让我觉得JavaScript不那么孤独


// web component
{/* <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>webcomponent</title>
  <style type="text/css">
  h3 {
    color: green;
  }
  </style>
</head>

<body>
  <test-component name="Livio">
    <span slot="age">22</span>
    <span slot="id">1010</span>
  </test-component>
  <script type="text/javascript">
  const template = document.createElement('template')
  template.innerHTML = `
  	<style>
  	  h3 {
  	  	color: red
  	  }
  	</style>
  	<h3></h3>
  	<div>age: <slot name="age" /></div>
  	<div>id: <slot name="id" /></div>

  `

  class TestComponent extends HTMLElement {
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
    }
    connectedCallback() {
      console.log('connected')
      this.shadowRoot.querySelector('h3').addEventListener('click', () => {
        this.clickH3()
      })
    }
    clickH3() {
      console.log(123)
    }
    disconnectedCallback() {
      this.shadowRoot.querySelector('h3').removeEventListener()
    }
  }
  window.customElements.define('test-component', TestComponent)
  </script>
</body>

</html> */}
// 场景: yarn install后, 发现.lock文件居然有diff, 怎么操作????
// yarn install --frozen-lockfile


// image/pixel to ascii
// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Ascii Art Converter</title>
//   <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
//   <style type="text/css">
//   * {
//     margin: 0;
//   }

//   body {
//     padding: 2rem 3rem;
//     font-family: 'VT323', monospace;
//     line-height: 1.5rem;
//     font-size: 18px;
//   }

//   header {
//     display: flex;
//     align-items: baseline;
//     font-size: 18px;
//   }

//   header h1 {
//     margin-right: 1.5rem;
//   }

//   input {
//     margin-top: 2rem;
//     font-size: 18px;
//   }

//   canvas {
//   	width: 500px;
//   	height: 500px;
//   }

//   pre {
//     font-family: 'Courier New', 'monospace';
//     margin: 1rem auto;
//     font-size: 2px;
//     line-height: 1;
//     width: 500px;
//     height: 500px;
//   }
//   </style>
// </head>

// <body>
//   <header>
//     <h1>Ascii Art Converter</h1>
//     <p>Upload a picture and turn it into pure ASCII masterpiece!</p>
//   </header>
//   <input type="file" name="picture" />
//   <canvas id="preview"></canvas>
//   <!-- 怎么用字符表示疏密程度呢 -->
//   <!-- 又怎么控制呢 -->
//   <pre id="ascii"></pre>
//   <script type="text/javascript">
//   const canvas = document.getElementById('preview');
//   const fileInput = document.querySelector('input[type="file"');
//   const asciiImage = document.getElementById('ascii');

//   const context = canvas.getContext('2d');

//   // 灰度计算有点忘了，平均好像一个效果
//   // 是r g b一样就能有灰度效果吗
//   const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

//   // 讲道理这是干啥
//   // 因为字符和像素点不一样，像素点是正方形，但字符的话是长方形
//   // (不知道不同字符形状是否有差别)
//   // 这里计算空字符串的宽高比来代表所有
//   // 不然计算出来的字符画会变形
//   const getFontRatio = () => {
//     const pre = document.createElement('pre');
//     pre.style.display = 'inline';
//     pre.textContent = ' ';

//     document.body.appendChild(pre);
//     const { width, height } = pre.getBoundingClientRect();
//     document.body.removeChild(pre);

//     return height / width;
//   };

//   const fontRatio = getFontRatio();

//   const convertToGrayScales = (context, width, height) => {
//     const imageData = context.getImageData(0, 0, width, height);

//     const grayScales = [];

//     for (let i = 0; i < imageData.data.length; i += 4) {
//       const r = imageData.data[i];
//       const g = imageData.data[i + 1];
//       const b = imageData.data[i + 2];

//       const grayScale = toGrayScale(r, g, b);
//       imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;

//       grayScales.push(grayScale);
//     }

//     context.putImageData(imageData, 0, 0);

//     return grayScales;
//   };

//   const MAXIMUM_WIDTH = 500;
//   const MAXIMUM_HEIGHT = 500;

//   const clampDimensions = (width, height) => {
//     const rectifiedWidth = Math.floor(getFontRatio() * width);

//     if (height > MAXIMUM_HEIGHT) {
//       const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);
//       return [reducedWidth, MAXIMUM_HEIGHT];
//     }

//     if (width > MAXIMUM_WIDTH) {
//       const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);
//       return [MAXIMUM_WIDTH, reducedHeight];
//     }

//     return [rectifiedWidth, height];
//   };

//   fileInput.onchange = (e) => {
//     const file = e.target.files[0];

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const image = new Image();
//       image.onload = () => {
//         const [width, height] = clampDimensions(image.width, image.height);

//         canvas.width = width;
//         canvas.height = height;

//         context.drawImage(image, 0, 0, width, height);
//         const grayScales = convertToGrayScales(context, width, height);

//         drawAscii(grayScales, width);
//       }

//       image.src = event.target.result;
//     };

//     reader.readAsDataURL(file);
//   };

//   const grayRamp = '界好你世三二一。- _';
//   const rampLength = grayRamp.length;

//   // 很有讲究的这玩意，根据灰度值取出合适的字符
//   // [0, 255]对应密集到稀疏
//   const getCharacterForGrayScale = grayScale => grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];

//   const drawAscii = (grayScales, width) => {
//     const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
//       let nextChars = getCharacterForGrayScale(grayScale);
//       if ((index + 1) % width === 0) {
//         nextChars += '\n';
//       }

//       return asciiImage + nextChars;
//     }, '');

//     asciiImage.textContent = ascii;
//   };
//   </script>
// </body>

// </html>

// css样式隔离的几种方式
// 1- css in line/css in js
//    不能复用，不能缓存，权重太高不好覆盖
// 2- @import
//    什么时候下载？
// Web Component中的Shadow Dom，但是有点极端，外部完全无法覆盖，太死板

// https://zhuanlan.zhihu.com/p/38715068
// less sass变量声明覆盖规则有差异
// postcss跟这类预处理器不是一个级别，算是compile css

// 其中 user-scalable 设置为 no 可以解决移动端点击事件延迟问题（拓展）
// process.cwd()和process.execPath

// 挺长的，docker beginner guide：https://docker-curriculum.com/

// JSON.stringify可以接受3个参数


// https://www.stevesouders.com/blog/2009/04/09/dont-use-import/
// (未手动实践，仅考虑@import和link)
// 在解析css中遇到了@import，会阻塞解析，下载完成后再继续(想了想这也是应该的)
// 那么多个@import可以并行下载吗?
// 除了ie，link与@import之间的下载不会阻塞
// link vs @import
// 1.使用范围
// 2.开始下载的时机不一致，link的时机还可以通过属性进行调整

// 当然关于link标签本身还有很多让我迷惑的地方
// 比如rel属性的值等于preload或者prefetch
// (虽然大致知道他俩的差别，preload强制浏览器调整优先级，prefetch由浏览器决定是否调整，至于具体的调整优先级是啥，迷茫了)，
// (chrome的优先级文档：https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit)
// as属性(as说是indicating the specific class，MDN上列出了有限个选择，那type属性不会冲突吗，type虽然只要MIME类型)，
// crossorigin属性
// title属性(不懂)

// trick: 给html元素加上title属性，鼠标hover在元素上时就会有文字提示
// tonight, 性能监控sdk https://zhuanlan.zhihu.com/p/420330110


// unlink array copy: [...arr], arr.slice(0)

// for (macroTask of macroTaskQueue) { // 遍历所有宏服务
//     // 1. 执行当前宏服务下的所有同步任务
//     handleMacroTask();
//     // 2. 遍历执行当前宏服务下的微服务
//     for (microTask of microTaskQueue) {
//         handleMicroTask(microTask);
//     }
// }


// vue nextTick执行时机是在dom更新后
// // Modify data
// vm.msg = 'Hello';
// // DOM has not been updated yet
// Vue.nextTick(function() {
//   // DOM updated
// });

// 根据HTML Standard，在每个 task 运行完以后，UI 都会重渲染，
// 那么在 microtask 中就完成数据更新，当前 task 结束就可以得到最新的 UI 了。
// 反之如果新建一个 task 来做数据更新，那么渲染就会进行两次。（当然，浏览器实现有不少不一致的地方，上面 Jake 那篇文章里已经有提到。）

// import(/* webpackChunkName: "add" */ 'a.js').then(({ add }) => {})


// 俩陶冶情操的网站
// 全球历史普及：https://www.allhistory.com/
// 话妖：https://www.cbaigui.com/

// Object.getOwnPropertySymbols()
// 如果一个对象的某个属性名是symbol，那么Object.keys()或者Object.getOwnPropertyName()是获取不到的

// 一个神奇的emoji效果
// 部分浏览器支持这么搞
// [..."👨‍👩‍👧‍👦"] 
// ["👨", "‍", "👩", "‍", "👦", "‍", "👦"]


// async函数返回值会被包裹一层promise，await可以获取promise内部最终状态
// 不是废话，看下列代码
// async function test() {
//   return await Promise.resolve({a:1})
// }
// test() 这里返回的是个promise

// 当引入的模块存在异步更新的时候，commonjs和es module获取的会不一样
// commonjs是相当于从对象上读取属性，也就是把结果缓存到对应属性上
// 而es module则是个引用，指向特定代码，可以获取到模块的更新
// 有关循环引用的问题，依然还是很迷惑，commonjs的循环引用node官网有讲解
// es module的话暂时看的是阮一峰老师的例子：https://www.ruanyifeng.com/blog/2015/11/circular-dependency.html


// https://www.eet-china.com/mp/a44399.html

// 有关SYN floor攻击的规避方式之一：cookie及其缺陷https://mp.weixin.qq.com/s/n17NjGRab1u5eXkOCro1gg


// 使用svg的viewbox属性，来实现svg元素的scalable，demo：https://codepen.io/Warinia/pen/JjybvXW

// vue3带来了什么？
// vue2逻辑代码写得到处都是，vue3提供了setup，理论上什么都可以写进去
// 这个，感觉很鸡肋，感觉没有react处理得好，setup肯定不止想解决这个问题，里面也包了很多东西
// 例如ref, reactive什么的，可以开发自己选择是否响应式，这个挺好
// 感觉vue3也是被typescript给逼的，但是不太懂为什么vue3就能很丝滑的接进ts


// vue template转render函数的可视化网站，https://vue-template-explorer.netlify.app
// 类似于babel的那个

// 有关模块管理工具有很多，最著名的是npm和yarn，
// 最近了解到一个pnpm，主卖点在于软链安装模式
// 可是最近yarn3.1也支持软链安装模式了，不懂会不会被干掉
// 还有个corepack，号称包管理工具的管理工具，不知会不会一网打尽

// **全停顿（Stop The World ）**在介绍垃圾回收算法之前，我们先了解一下「全停顿」。垃圾回收算法在执行前，
// 需要将应用逻辑暂停，执行完垃圾回收后再执行应用逻辑，这种行为称为 「全停顿」（Stop The World）。
// 例如，如果一次GC需要50ms，应用逻辑就会暂停50ms。全停顿的目的，是为了解决应用逻辑与垃圾回收器看到的情况不一致的问题。
// 举个例子，在自助餐厅吃饭，高高兴兴地取完食物回来时，结果发现自己餐具被服务员收走了。
// 这里，服务员好比垃圾回收器，餐具就像是分配的对象，我们就是应用逻辑。在我们看来，只是将餐具临时放在桌上，但是服务员看来觉得你已经不需要使用了，因此就收走了。
// 你与服务员对于同一个事物看到的情况是不一致，导致服务员做了与我们不期望的事情。
// 因此，为避免应用逻辑与垃圾回收器看到的情况不一致，垃圾回收算法在执行时，需要停止应用逻辑。



// babel.config和babelrc
// 只意会到了全局和局部，涉及具体使用和可能导致问题，绕晕了

// 数字千分位逗号的神奇方法
// const nf = new Intl.NumberFormat('en-US')
// export const toThousands = (number) => {
//   return nf.format(number)
// }


// webpack的魔法注释还可以让代码进行prefetch或者preload
// https://webpack.docschina.org/guides/code-splitting/


// 用javascript实现screenshot(页面or Div)的几种方式和他们的优缺点
// https://hackernoon.com/how-to-take-screenshots-in-the-browser-using-javascript-l92k3xq7

// documentfragment, 本身并不在document里,但是可以插入子节点
// plus:这网站真的很有用, 阮一峰大佬nb
// http://javascript.ruanyifeng.com/dom/text.html#toc10

// webpack的hash，chunkhash和contenthash
// (仅从网上看的，没找到官网描述)
// hash -> 针对整个项目
// contenthash -> 针对文件
// chunkhash -> 针对chunk

// 面试题
// https://zhuanlan.zhihu.com/p/431205595

// docker的基本使用
// https://www.bilibili.com/video/BV11L411g7U1?p=1

// https://zhuanlan.zhihu.com/p/28113197

// this的设计目的，是在函数内部，代指函数当前的运行环境

// worker与主线程之间是传值而不是传址


// 所谓构造函数，就是通过这个函数生成一个对象，this指向这个函数
// 生成对象包括两种含义，一是函数返回个对象，二是直接指向函数本身(函数也是对象)

// 移动端的适配、调试、错误收集

// http的广度扫盲
// https://mp.weixin.qq.com/s?__biz=Mzg5NDY2MDk4Mw==&mid=2247486375&idx=1&sn=faab06e21d0db873c53d5c7b3237c45c&chksm=c01d73bff76afaa906d721ca15b36231b69c246c47a7c6ab726c6502d7f7c5f282e3fbf03590&cur_album_id=2007539102832738314&scene=189#rd

// https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md

// const timingInfo = window.performance.timing;

// // DNS解析，DNS查询耗时
// timingInfo.domainLookupEnd - timingInfo.domainLookupStart;

// // TCP连接耗时
// timingInfo.connectEnd - timingInfo.connectStart;

// // 获得首字节耗费时间，也叫TTFB
// timingInfo.responseStart - timingInfo.navigationStart;

// // *: domReady时间(与DomContentLoad事件对应)
// timingInfo.domContentLoadedEventStart - timingInfo.navigationStart;

// // DOM资源下载
// timingInfo.responseEnd - timingInfo.responseStart;

// // 准备新页面时间耗时
// timingInfo.fetchStart - timingInfo.navigationStart;

// // 重定向耗时
// timingInfo.redirectEnd - timingInfo.redirectStart;

// // Appcache 耗时
// timingInfo.domainLookupStart - timingInfo.fetchStart;

// // unload 前文档耗时
// timingInfo.unloadEventEnd - timingInfo.unloadEventStart;

// // request请求耗时
// timingInfo.responseEnd - timingInfo.requestStart;

// // 请求完毕至DOM加载
// timingInfo.domInteractive - timingInfo.responseEnd;

// // 解释dom树耗时
// timingInfo.domComplete - timingInfo.domInteractive;

// // *：从开始至load总耗时
// timingInfo.loadEventEnd - timingInfo.navigationStart;

// // *: 白屏时间
// timingInfo.responseStart - timingInfo.fetchStart;

// // *: 首屏时间
// timingInfo.domComplete - timingInfo.fetchStart;

// 实现原理：当一项资源（如<img>或<script>）加载失败，加载资源的元素会触发一个Event接口的error事件，并执行该元素上的onerror()处理函数。
// 这些error事件不会向上冒泡到window，不过能被window.addEventListener在**捕获**阶段捕获。

// https://github.com/febobo/web-interview


// vuef的provide和inject，通俗的说就是可以给子组件传值，跟props不同的是不用每一层都传，感觉跟react的context异曲同工



// 项目背景
// 项目如何进行的，进行过程中遇到了哪些问题以及如何解决
// 项目如何保证代码质量（单元测试、代码规范、提交规范以及自动 CI 等）
// 项目的版本控制

// css的visibility和opacity都会隐藏元素，但是元素依然存在
// 区别在于对于子元素的影响

// 都先自己写一遍
// http0.9-http2, content-length
// http 301 302 307
// 性能优化
// 673最长递增子序列
// vue的问题汇总https://vue3js.cn/interview/vue/mixin.html

// 见过的唯一一个写测试的promise
// https://github.dev/imtaotao/promise

// 一次一个问题
// 项目亮点
// 性能优化
// 手写(js, es6, vue)
// 算法


// https://juejin.cn/post/6945625394154307592
// CDN意义，根据网络带宽、负载情况、距离用户距离和响应时间综合考虑，CDN防止DDos攻击(隐藏源站IP，边缘节点作为防线承受压力)
// setTimeout为什么最小4ms(无限嵌套造成和主线程抢CPU和高额耗电)，是浏览器内核自己写的
// MDN上说postMessage可以0ms
// DNS根域名服务器13个
// html可以开启DNS-prefetch
// 在DNS缓存之前，还可以经过浏览器缓存、操作系统缓存、路由器缓存
// Symbol.for()的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值。


// 我愿意为了这本开源解析付钱
// http://caibaojian.com/vue-design/art/8vue-reactive-dep-watch.html#%E5%88%9D%E8%AF%86-watcher

// https://juejin.cn/post/6844904165672484871

// Function.prototype.fakeBind = function (context, ...args) {
//   var that = this;
//   const fn = function (...other) {
//     return that.call(this instanceof fn ? this : context, ...args, ...other);
//   };
//   fn.prototype = Object.create(this.prototype)
//   return fn
// };


// ========================================================================================
// vue为了让数据驱动视图，都有哪些数据？
// props等父组件更新逻辑(这都涉及到双向绑定了)
// data等内部自身数据驱动视图更新
// vuex等
// provide，inject
// mixin

// 什么时候通知更新？

// 都有谁要更新
// 每个数据都有一个Dep实例，里面有个subs保存着数据对应的观察者
// 可以是computed可以是watch可以是render等抽象逻辑
// Dep会通知Watch，Watch里走逻辑
// 所以Dep只是个接线员，保存着数据对应的Watcher们，然后通知他们
// 数据改变之后的连锁反应，由Watch管理，一个Watcher管理一个反应(正作用?)
// 那Dep怎么知道一个数据会有哪些Watcher，扯淡的是Watcher又为什么会收集Dep
// (有说法是避免收集重复依赖, 还有移除无用的依赖)？
// emm移除无用依赖到还有可能

// Dep只有两个作用,收集Watcher,执行Watcher的update方法
// Watcher让我有点懵,不过他的update会先schedular,进一个队列
// 然后run方法才是实际更新

// 当watcher触发更新时,并不会马上更新,而是进入schedular调度
// 由于存在一个src/core/config, 而config.async默认为true
// 所以watcher触发的更新会被包裹, 依次尝试下列包裹方法:
// promise.then
// mutationObserber
// setImmediate
// settimeout兜底
// 然后对一整个队列进行更新,
// 为什么偏向于microtask呢, 两个方面
// 1.macrotask提了太多issue
// 2.microtask在浏览器渲染前会全部执行完,这样下一次渲染直接拿最新数据
// 而macrotask任务之间可能穿插着渲染

let uid = 0;

class Dep {
  constructor() {
    this.subs = [];
  }
  // depend()
  // notify() {
  //   // TODO:为什么要这样搞一下
  //   const subs = this.subs.slice(0)
  //   for(var i=0;i<subs.length;i++) {
  //     subs[i].update()
  //   }
  // }
}

class Observer {
  // 需要保证进来value的是引用类型
  constructor(value) {
    this.value = value;
    // 为进来的加个标识，不用重复操作
    Object.defineProperty(value, "__ob__", {
      value: this,
      configurable: true,
      enumerable: false,
    });
    if (Array.isArray(value)) {
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  walk(obj) {
    const keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }
  observeArray(array) {
    for (var i = 0; i < array.length; i++) {
      observe(array[i]);
    }
  }
}

function observe(value) {
  if (value === null || typeof value !== "object") {
    return;
  }
  // 是否已经响应式过
  if (value["__obj__"]) return value["__ob__"];

  let ob = new Observer(value);
  return ob;
}

function defineReactive(obj, key, val, shallow) {
  const property = Object.getOwnPropertyDescriptor(obj, key);

  // 这里也就是为什么Object.freeze会冻结掉响应式
  // 因为Object.freeze会使writable和configable为false
  if (property && property.configurable === false) {
    return;
  }

  // 不能覆盖用户自定义的getter、setter
  // 我们只是监听事件发生
  const getter = property && property.get;
  const setter = property && property.set;
  // TODO:这段代码什么意思还不知道
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  // observe里判断是否是引用类型，是的话新建Observer实例
  let childOb = !shallow && observe(val);

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 先执行
      const value = getter ? getter.call(this) : val;
      console.log("obj get", value);
      return value;
    },
    set(newValue) {
      const value = getter ? getter.call(this) : val;
      // 比较+0 -0和NaN
      if (Object.is(newValue, value)) {
        return;
      }
      if (setter) {
        val = setter.call(obj, newValue);
      } else {
        val = newValue;
      }
      // 因为这里可能会赋值给引用类型，希望新进来的引用类型也能响应式
      childOb = !shallow && observe(newValue);
      console.log("obj set", newValue, value);
    },
  });
}

const obj = {
  a: {
    c: 999,
    z: {
      j: 9,
    },
  },
  b: new Map(),
  m: null,
  arr: [{ num: ["num"] }, 2, [{ mm: "mm" }, 4]],
};

new Observer(obj);

var nn = obj.a;

// obj.a.c = {y:0}

// obj.a.c.y = 'jjjjj'

// obj.m = 8

// obj.b.set('t', 123)

// nn = obj.b.get('t')

// nn = obj.arr[0].num
// obj.arr[0].num = 'new num'
obj.a.z.j = 99;

// Object.definePropertyproperty缺点
// 数组干了两件事，劫持原型链上的方法(对于会修改原数组的方法，监听新加的元素)和监听原有的元素
// 漏掉的有：动态添加元素，例如arr[i] = {}
// 对于Map、Set等数据结构，效果不符预期
// 需要迭代到最底层，数据嵌套过深影响性能，比如需要不断触发外层元素的get，最后才触发目标元素的get或者set

// vue3 proxy的优势
// 支持数据对象Array、Object、Map、Set、WeakMap、WeakSet

// dom中的Node和Element
// Node可以是Dom内的任意节点，例如文本或注释，也可以是HTML的Tag，是DOM对象
// Element是特殊的Node，可以直接在HTML中用Tag声明，并且用id、class等property修饰
// 比如：var body = document.querySelector('body')
// body.childElementCount不会统计注释节点<!--1212-->
// 但是body.childNodes统计的时候，不仅会统计注释节点，
// 而且在所有Element节点间会穿插text类型的Node，value是换行符

// 同源：协议、域名(疑问，这里是域名还是IP，因为DNS服务器不是可以给一个域名配置多个IP吗)、端口

// 同源策略的限制范围：
// - cookie、localstorage和indexDB的获取
// - DOM


// // http重定向相关：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections
// 永久重定向
// - 301 Moved Permanently
// - 308 Permanently Redirect
// 临时重定向
// - 302 Found 
// - 303 See Other
// - 307 Temporary Redirect
// 特殊重定向
// - 300 Multiple Choice
// - 304 Not Modified

// xss，。。。

// - Cache-Control: max-age=1000s
// - Expires: 写的是过期时间，时间格式很多

// - Last-Modified，跟If-Modified-Since比较
// - Etag，对文件进行标识的字符串，跟If-None-Match比较

// service-worker：为主线程提供网络或缓存的中间服务

// 限制get和post请求的东西

// 1.http规范，最高 -> 
// 2.对于前后端交互，由restful规范，但是其他地方，比如后端自己用，就没有restful规范
// 3.浏览器(缓存，url长度)和服务器限制

// get 没有副作用(幂等 => 可以缓存)
// 有关get请求的一大误点在于，get请求参数可以携带在query也可以携带在body，
// http规范里没有说get就不能有body，但是浏览器和restful规范会有限制
// 并且，当作为接口使用的时候(包括使用xhr发送)，没有所谓的query参数必须是ascii码和特殊字符，那是浏览器url 
// http协议本身没有对url长度做任何规定，实际的限制是客户端/浏览器+服务器的限制

// css的BFC，层叠上下文，选择器，z-index

// 对于普通函数而言，this指向运行时所在的对象，它本身就是个动态的
// 箭头函数的this跟常规函数的规则完全不同。无论用什么方式、在哪调用箭头函数，里面的this永远等于外层函数的this。
// 换句话说，箭头函数的this是由词法决定的，它没有定义自己的执行上下文。
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// }

// const test = shape.diameter
// console.log(test())
// console.log(shape.perimeter())

// 原生具备 Iterator 接口的数据结构如下。
// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象

// 有6种falsy值: null, undefined, 0, '', NaN, false

// 使用import，被导入的模块会先执行

// Object.freeze使得无法添加、修改或删除对象的属性(除非属性的值是另一个对象)

// 如果某个网站想要https, 但是图片等资源是http, 并且已经固化到了数据库, 这样浏览器会提示不安全
// 有个办法可以解决, 就是加上meta标签, 页面上所有请求都强制https
// <meta http-equiv="Content-Security-Policy" 
//     content="upgrade-insecure-requests">
// 某些请求的服务器如果不支持https,就会挂掉

// npm会把node_modules/.bin子目录加到path里

// Blob: 一个专门用于支持文件操作的二进制对象
// ArrayBuffer: 二进制缓冲区，类似数组，但跟数组的特性和api有很大不同
// Buffer： nodejs提供的二进制缓冲区，常用来处理I/O操作

// Content-Length(HTTP1.1), HTTP消息长度, 用十进制数字表示的八位字节的数目(经过压缩就是压缩后的大小)
// (因为对于HTTP1.1来说，一个TCP连接可以传送多个回应，而且又是按顺序回应(对头阻塞), 所以
// 用Content-Length表示这次回应的字节大小，来区分多个回应)
// Content-Encoding, 说明数据的压缩方法

// any 和 unknown 的最大区别是, unknown 是 top type (任何类型都是它的 subtype) , 
// 而 any 即是 top type, 又是 bottom type (它是任何类型的 subtype ) ,
// 这导致 any 基本上就是放弃了任何类型检查.

// bit，二进制位，要么是0要么是1，是计算机内部数据存储的最小单位
// 字节，byte，1byte = 8bit，一个英文字符占1字节，一个汉字占2字节
// 1024byte = 1KB

// ascii: 一个字节有8bit，可以表示2^8=256种状态，美国人认为足够表示字母和一些特殊字符就可以了
// 所以ascii码最高位固定为0，可以表示2^7=128种状态

// unicode就是一种规则，使用2个字节表示一个字符，解决了编码统一问题
// 使每种语言的每个字符都有统一且唯一的二进制编码
// ascii码对于多出来的二进制位，采取补0

// UTF-8是unicode在不同系统平台上的实现方式，它是一种变长的编码方式
// 就是说，可以使用1~4个字节表示一个符号

// 可能引起内存泄露的点：
// 1.全局变量没有手动销毁，因为全局变量不会被回收
// 2.闭包中的局部变量没有被释放
// 3.没有移除监听事件
// 3.console出去的对象

// 进程间通信(IPC)大概有这几种：
// 匿名管道
// 命名管道
// 信号量
// 消息队列
// 信号
// 共享内存
// 套接字

// http1.0 头信息是ascii码，数据体是MIME，Expires
// http1.1 管线化，即一个TCP链接可以发送多个请求，且不需要等上一个请求返回，Cache-Control： max-age
// (how: )
// http1 头信息和数据体都是二进制，统称为帧
//       (二进制，多工，数据流，头信息压缩，服务端推送(gzip或是同时维护一张表))


// ip地址是由网络号和主机号组成，并且按照网络号长度和网络号的前几位进行了分类

// 0.0.0.0: 在服务器中，0.0.0.0指的是本机上的所有IPV4地址，如果一台主机有两个IP地址，并且起了
// 一个0.0.0.0的服务，那么通过两个IP都可以访问到这个服务
// 反过来就不行

// 127.0.0.1：回环地址指的所有网络号为127的IP地址，所以127.0.0.1属于回环地址
// 回环地址：所有发往该类地址的数据包都要loop back
// 所以可以通过ping 127.0.0.1测试一台机器的网络是否正常工作

// localhost：是个域名，一般机器里ipv4对应的是127.0.0.1，ipv6里对应的是::1

// ipv6的设计初衷是为了解决ip地址枯竭，ipv4 32bit，ipv6 128bit

// CORS简单请求复杂请求

// 据说Symbol的出现最初是为了私有属性，后来Object.getOwnPropertySymbols淡化了这个概念



// css的BFC，层叠上下文，选择器，z-index， 各种居中

// BFC: 块级格式化上下文，具有BFC特性的元素会成为一个独立的容器，容器内部元素的布局不会影响到外部
//      且BFC具有一些特殊的规则
// BFC规则：
//  - 同一BFC内，外边距会折叠(解决办法：放在不同的BFC)
//  - 可以包含浮动元素(因为一个元素float不为none的时候，会脱离正常文档流，导致父容器高度塌陷)
//  - 内部的block会垂直分布
// 怎么触发BFC：
//  - position为absolute或者fixed 
//  - overflow不为visible
//  - float不为none 
//  - display为inline-block，table-cells等

// CSS：层叠水平(stacking level)
// 著名的7阶层叠水平图片
// 当不同的DOM元素发生重叠的时候，(同一层叠上下文下)会按照层叠水平控制显示顺序，
// 而z-index可以调整顺序，使元素上浮或下沉
// (层叠水平一样的，根据DOM顺序)

// 而不同的层叠上下文发生重叠：
// 层叠上下文：

// css居中：
//  - 水平：text-align: center / 
//          margin: 50% transform: translateX(-50%)
//          left: 50% transform -50%
//          flex;
//          grid


// 网络：http/s握手挥手，tcp/udp，缓存，攻击防护(xss, csrf, csp)，token/session, oauth，

// 浏览器限制脚本内发出的跨域请求，同源策略
// cors: 目前浏览器大多支持，会附加一些额外的头信息，有时候还会多发一次请求
// - 简单请求：
//   - 请求方法是GET, HEAD或者POST 
//   - 允许人为设置的头部字段：Accept, Acept-Language, Content-Language, Content-type
//   - Content-Type的值仅限于以下三种：
//     - text/plain 
//     - multipart/form-data
//     - application/x-www-urlencoded
// - 复杂请求：

// cors对于简单请求会在头信息里加上Origin字段
// 而复杂请求，会提前发一个预检请求，options，
// options会携带以下参数：
// - origin
// - Access-control-request-method，有哪些跨域方法
// - access-control-request-headers，有哪些请求头

// javascript > style > layout > paint > composite 

// vue：keep-alive, next-tick, diff, computed/watch ，父组件更新子组件不更新
// vue-router: 架构，使用，组件，原理
// vuex：区别，思维


// webpack原理，loader plugin

// javascript作用域、原型链、闭包，每个讲4-5分钟



















