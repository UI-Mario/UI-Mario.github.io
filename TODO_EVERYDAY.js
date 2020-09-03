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

// 2020/09/02
// learn redux
// learn net security:CORS
// want todo:
// heapsort ------------
// use my server  ------ n
// build my cli -------- n
var arr = [9, 10, 4, 5, 6, 13];

// TODO:失败，看了一个小时不知道问题出在哪。MD以后一定要找出来
// const heapSort = (arr) => {
//   initHeapfy(arr);
//   for (var i = arr.length - 1; i > 0; i--) {
//     [arr[i], arr[0]] = [arr[0], arr[i]];
//     max_heapfy(arr, 0, i);
//     // console.log(arr)
//   }
// };

// const max_heapfy = (arr, index, length) => {
//   while (true) {
//     let largest = index;
//     let leftChild = 2 * index + 1;
//     let rightChild = 2 * index + 2;
//     if (leftChild < length && arr[leftChild] > arr[index]) {
//       largest = leftChild;
//     }
//     if (rightChild < length && arr[rightChild] > arr[index]) {
//       largest = rightChild;
//     }
//     if (largest === index) {
//       break;
//     }
//     [arr[index], arr[largest]] = [arr[largest], arr[index]];
//     index = largest;
//   }
// };

// const initHeapfy = (arr) => {
//   for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
//     max_heapfy(arr, i, arr.length);
//   }
// };
// heapSort(arr);
// console.log(arr);

