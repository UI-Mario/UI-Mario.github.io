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
// chrome 打断点，调试----
// leetcode-------------
// react hooks----------
// do this nearly by copy, rewrite it
var permute = function(nums) {
  if(!nums.length) return;
  var res = [];
  var path = [];
  var usedId = new Set();
  dfs(nums, 0, path, usedId, res);
  return res;
};

var dfs = (nums, depth, path, usedId, res) => {
  if(depth === nums.length){
      res.push(path.concat());
      return;
  }
  for(var i = 0;i < nums.length;i++){
      if(usedId.has(i)) continue;
      path.push(nums[i]);
      usedId.add(i);
      dfs(nums, depth + 1, path, usedId, res);
      usedId.delete(i);
      path.pop();
  }
  return res;
}

// 2020/9/28
// leetcode-------------全排列2 y
// chrome调试-----------y
// react video---------想看正经企业级代码，有点难找