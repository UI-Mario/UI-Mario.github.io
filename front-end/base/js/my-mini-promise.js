var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["FULFILLED"] = "FULFILLED";
    Status["REJECTED"] = "REJECTED";
})(Status || (Status = {}));
var MyPromise = /** @class */ (function () {
    function MyPromise(exector) {
        var _this = this;
        // 下面这俩主要是为了异步
        this._resolveQueue = []; // resolve时触发的成功队列
        this._rejectQueue = []; // reject时触发的失败队列
        this.status = Status.PENDING;
        var resolve = function (success_value) {
            _this.status = Status.FULFILLED;
            _this.value = success_value;
            // 执行resolve回调
            while (_this._resolveQueue.length) {
                var callback = _this._resolveQueue.shift();
                callback(success_value);
            }
            console.log("resolve", _this.value);
        };
        var reject = function (failed_reason) {
            _this.status = Status.REJECTED;
            _this.reason = failed_reason;
            while (_this._rejectQueue.length) {
                var callback = _this._rejectQueue.shift();
                callback(failed_reason);
            }
            console.log("reject", _this.reason);
        };
        try {
            exector(resolve, reject);
        }
        catch (error) {
            reject(error);
        }
    }
    MyPromise.all = function () {
        console.log("this is all");
    };
    MyPromise.race = function () { };
    MyPromise.allSettled = function () { };
    MyPromise.any = function () { };
    MyPromise.resolve = function () { };
    MyPromise.reject = function () { };
    MyPromise["try"] = function () { };
    // 本来then、catch、finally是prototype上的方法，就想着继承过来算了
    // 结果要跟status挂钩，还是就在这写了
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        // promise A+规定这俩传入的函数必须异步执行
        // 根据规范，如果then的参数不是function，则忽略它, 让值继续往下传递，链式调用继续往下执行
        typeof onFulfilled !== "function" ? (onFulfilled = function (value) { return value; }) : null;
        typeof onRejected !== "function" ? (onRejected = function (error) { return error; }) : null;
        return new MyPromise(function (resolve, reject) {
            var resolveFn = function (value) {
                try {
                    var x = onFulfilled(value);
                    // TODO:
                    // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                }
                catch (error) {
                    reject(error);
                }
            };
            var rejectFn = function (error) {
                try {
                    var x = onRejected(error);
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                }
                catch (error) {
                    reject(error);
                }
            };
            switch (_this.status) {
                case Status.PENDING:
                    _this._resolveQueue.push(onFulfilled);
                    _this._rejectQueue.push(onRejected);
                    break;
                case Status.FULFILLED:
                    // 这里的value就是resolve里边的success_value
                    resolveFn(_this.value);
                    break;
                case Status.REJECTED:
                    rejectFn(_this.reason);
                    break;
            }
        });
    };
    MyPromise.prototype["catch"] = function () { };
    MyPromise.prototype["finally"] = function () { };
    return MyPromise;
}());
new MyPromise(function (resolve, reject) {
    if (6 > 5) {
        resolve([1, 2, 3]);
    }
    else {
        reject(4);
    }
}).then(function (res) {
    new MyPromise(function (resolve, reject) {
        if (6 > 5) {
            resolve([4, 5, 6]);
        }
        else {
            reject(99);
        }
    });
}).then(function (res) {
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
