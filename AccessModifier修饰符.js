// let drawPoint = (point: Point) => {
//     console.log({
//         x: point.x,
//         y: point.y
//     });
// TypeScript 下 Class写法
var Point = /** @class */ (function () {
    // //  声明成员变量
    // x: number;
    // y: number;
    // 使用构造函数 constructor
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        // 成员方法
        this.drawPoint = function () {
            console.log("x: ", _this.x, "y: ", _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.Y - _this.y, 2);
        };
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
// Access Modifier 修饰符
var point = new Point(24, 50);
// point.setX(10);
// console.log(`getX-----`, point.getX());
// point.x = 30;
// point.y = 5;
point.X = 10;
point.Y = 20;
console.log(point.X);
console.log(point.Y);
// 在TypeScript中有三种修饰符 public、private、protected
