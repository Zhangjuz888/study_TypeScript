// let drawPoint = (point: Point) => {
//     console.log({
//         x: point.x,
//         y: point.y
//     });
// TypeScript 下 Class写法
var Point = /** @class */ (function () {
    // 使用构造函数 constructor
    function Point(x, y) {
        var _this = this;
        // 成员方法
        this.drawPoint = function () {
            console.log("x: ", _this.x, "y: ", _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point();
// point.x = 2;
// point.y = 3;
point.drawPoint();
