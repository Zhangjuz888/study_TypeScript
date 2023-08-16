
// 项目中有多个Class定义，为了按照依赖关系组合起来，这里使用module模块的概念去写；

import { Point } from "./point";

const point = new Point(24,50);
point.X = 10;
console.log(point.X);
