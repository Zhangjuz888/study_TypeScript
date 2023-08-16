
// let drawPoint = (point: Point) => {
//     console.log({
//         x: point.x,
//         y: point.y
//     });
    
// }

// drawPoint({x: 105, y: 24});
// // drawPoint({x: '法外狂徒', y: '张三'});

// let getDistances = (a: Point, b: Point) => {
//     console.log(`a-------`, a.x);
    
// }

// getDistances({
//     x: 2,
//     y: 3
// },
// {
//     x: 4,
//     y: 5
// })


// // 创建接口interface
// interface Point {
//     x: number,
//     y: number
// }


// 创建了一个接口
interface IPoint {
    drawPoint: ()=> void;
    getDistances: (p: IPoint) => number;
    X: number;
    Y: number;
    // getX: () => number;
    // getY: () => number;
    // setX: (value) => void;
    // setY: (value) => void;
}

// TypeScript 下 Class写法
class Point implements IPoint {
    // 使用构造函数 constructor
    constructor(private x: number, private y: number) {

    }
    // 成员方法
    drawPoint = () => {
        console.log("x: ", this.x, "y: ", this.y);
    }
    getDistances = (p: IPoint) => {
        return Math.pow(p.X-this.x, 2) + Math.pow(p.Y-this.y,2);
    }
    set X (value: number){
        if (value < 0) {
            throw new Error('value不能小于0');
        }
        this.x = value;
    }
    get X () {
        return this.x;
    }
    set Y  (value: number) {
        if (value < 0) {
            throw new Error('value不能小于0');
        }
        this.y = value;
    }
    get Y () {
        return this.y;
    }
}

// Access Modifier 修饰符
const point = new Point(24, 50);
// point.setX(10);
// console.log(`getX-----`, point.getX());

// point.x = 30;
// point.y = 5;

point.X = 10;
point.Y = 20;
console.log(point.X);
console.log(point.Y);


// 在TypeScript中有三种修饰符 public、private、protected
