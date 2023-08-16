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
export class Point implements IPoint {
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