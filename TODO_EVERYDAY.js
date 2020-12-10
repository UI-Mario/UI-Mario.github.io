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
var inorderTraversal = function(root) {
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
    dfs(res, target - candidates[start], candidates, [...combine, candidates[start]], start);
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
// webpack