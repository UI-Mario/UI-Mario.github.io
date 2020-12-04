class MyPromiseAncestor {
  public static then() {}
  public static catch() {}
  public static finally() {}
}

enum Status {
  PENDING = "PENDING", // 进行中
  FULFILLED = "FULFILLED", // 已成功
  REJECTED = "REJECTED", // 已失败
}

class MyPromise extends MyPromiseAncestor {
  private status; //保存三个状态之一
  private value: string; //成功后的结果存放地，但是类型怎么定呢，我传了个数字一样进来了，貌似没啥影响
  private reason: string; //失败原因存放地
  constructor(exector) {
    super();
    this.status = Status.PENDING;
    const resolve = (success_value) => {
      this.status = Status.FULFILLED;
      this.value = success_value;
      console.log("resolve", this.value);
    };
    const reject = (failed_reason) => {
      this.status = Status.REJECTED;
      this.reason = failed_reason;
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
  public static race() {}
  public static allSettled() {}
  public static any() {}
  public static resolve() {}
  public static reject() {}
  public static try() {}
  public noStaticOnlyInstance() {}
}

new MyPromise((resolve, reject) => {
  if (6 > 5) {
    resolve([1, 2, 3]);
  } else {
    reject(4);
  }
})

console.log(MyPromise.prototype)

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
