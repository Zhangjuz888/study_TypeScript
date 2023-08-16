var log = function (message) {
    console.log(message);
};
var log2 = function (message) { return console.log(message); };
// log2(1);
log2('sha');
// 默认值设置方法
var log3 = function (message, code) {
    if (code === void 0) { code = 0; }
    return console.log("log3------", message, code);
};
log3('not defind'); // log3------ not defind 0
// 省略方法 输出undefind
var log4 = function (message, code) { return console.log(message, code); };
log4("log4"); // log4 undefined
