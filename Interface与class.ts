
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
    x: number,
    y: number,
    drawPoint: ()=> void;
    getDistances: (p: IPoint) => number;
}

// TypeScript 下 Class写法
class Point implements IPoint {
    // //  声明成员变量
    // x: number;
    // y: number;

    // 使用构造函数 constructor
    constructor(public x: number, public y: number) {
        // this.x = x;
        // this.y = y;
    }

    // 成员方法
    drawPoint = () => {
        console.log("x: ", this.x, "y: ", this.y);
    }
    getDistances = (p: IPoint) => {
        return Math.pow(p.x-this.x, 2) + Math.pow(p.y-this.y,2);
    }
}

const point = new Point();
// point.x = 2;
// point.y = 3;
point.drawPoint();