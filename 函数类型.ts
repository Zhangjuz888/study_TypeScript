let log = function (message) {
    console.log(message);
}

let log2 = (message: string) => console.log(message);
// log2(1);
log2('sha');

// 默认值设置方法
let log3 = (message: string, code: number = 0) => console.log(`log3------`, message, code);
log3('not defind') // log3------ not defind 0

// 省略方法 输出undefind
let log4 = (message: string, code?: number) => console.log(message,code);
log4(`log4`) // log4 undefined

