var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyPromiseAncestor = /** @class */ (function () {
    function MyPromiseAncestor() {
    }
    MyPromiseAncestor.then = function () { };
    MyPromiseAncestor["catch"] = function () { };
    MyPromiseAncestor["finally"] = function () { };
    return MyPromiseAncestor;
}());
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["FULFILLED"] = "FULFILLED";
    Status["REJECTED"] = "REJECTED";
})(Status || (Status = {}));
var MyPromise = /** @class */ (function (_super) {
    __extends(MyPromise, _super);
    function MyPromise(exector) {
        var _this = _super.call(this) || this;
        _this.status = Status.PENDING;
        var resolve = function (success_value) {
            _this.status = Status.FULFILLED;
            _this.value = success_value;
            console.log("resolve", _this.value);
        };
        var reject = function (failed_reason) {
            _this.status = Status.REJECTED;
            _this.reason = failed_reason;
            console.log("reject", _this.reason);
        };
        try {
            exector(resolve, reject);
        }
        catch (error) {
            reject(error);
        }
        return _this;
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
    MyPromise.prototype.noStaticOnlyInstance = function () { };
    return MyPromise;
}(MyPromiseAncestor));
new MyPromise(function (resolve, reject) {
    if (6 > 5) {
        resolve([1, 2, 3]);
    }
    else {
        reject(4);
    }
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
