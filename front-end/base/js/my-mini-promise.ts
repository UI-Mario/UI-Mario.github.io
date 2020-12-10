enum Status {
  PENDING = "PENDING", // 进行中
  FULFILLED = "FULFILLED", // 已成功
  REJECTED = "REJECTED", // 已失败
}

class MyPromise {
  private status; //保存三个状态之一，本来不想给初始值，为了异步就给了
  private value: string; //成功后的结果存放地，但是类型怎么定呢，我传了个数字一样进来了，貌似没啥影响
  private reason: string; //失败原因存放地
  // 下面这俩主要是为了异步
  private _resolveQueue = []; // resolve时触发的成功队列
  private _rejectQueue = []; // reject时触发的失败队列
  constructor(exector) {
    this.status = Status.PENDING;
    const resolve = (success_value) => {
      this.status = Status.FULFILLED;
      this.value = success_value;

      // 执行resolve回调
      while (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(success_value);
      }
      console.log("resolve", this.value);
    };
    const reject = (failed_reason) => {
      this.status = Status.REJECTED;
      this.reason = failed_reason;

      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(failed_reason);
      }
      console.log("reject", this.reason);
    };
    try {
      exector(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  public static all() {
    console.log("this is all");
  }
  public static race() { }
  public static allSettled() { }
  public static any() { }
  public static resolve() { }
  public static reject() { }
  public static try() { }
  // 本来then、catch、finally是prototype上的方法，就想着继承过来算了
  // 结果要跟status挂钩，还是就在这写了
  public then(onFulfilled, onRejected?) {
    // promise A+规定这俩传入的函数必须异步执行
    // 根据规范，如果then的参数不是function，则忽略它, 让值继续往下传递，链式调用继续往下执行
    typeof onFulfilled !== "function" ? (onFulfilled = (value) => value) : null;
    typeof onRejected !== "function" ? (onRejected = (error) => error) : null;

    return new MyPromise((resolve, reject) => {
      const resolveFn = (value) => {
        try {
          const x = onFulfilled(value);
          // TODO:
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      const rejectFn = (error) => {
        try {
          const x = onRejected(error);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };
      switch (this.status) {
        case Status.PENDING:
          this._resolveQueue.push(onFulfilled);
          this._rejectQueue.push(onRejected);
          break;
        case Status.FULFILLED:
          // 这里的value就是resolve里边的success_value
          resolveFn(this.value);
          break;
        case Status.REJECTED:
          rejectFn(this.reason);
          break;
      }
    });
  }
  public catch() { }
  public finally() { }
}

new MyPromise((resolve, reject) => {
  if (6 > 5) {
    resolve([1, 2, 3]);
  } else {
    reject(4);
  }
}).then((res) => {
  new MyPromise((resolve, reject) => {
    if (6 > 5) {
      resolve(res);
    } else {
      reject(99);
    }
  });
}).then((res) => {
  console.log(res);
});

console.log(MyPromise.prototype);

// new MyPromise((resolve, reject) => {
//   if (6 > 5) {
//     resolve([1,2,3]);
//   } else {
//     reject(4);
//   }
// }).then(
//   res => console.log(res),
//   err => console.log(err),
// )
