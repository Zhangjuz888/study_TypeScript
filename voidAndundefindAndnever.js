// void、undefind、never
// 因为以下函数没有任何返回值所以定义为void
function printResult() {
    console.log("hei");
}
console.log(printResult());
// 如果定义为undefind也表示不存在，但是这里定义的上的是指物质不存在。而void所说的的不存在是指本身就不存在；
function printResult2() {
    console.log("hei");
    return;
}
console.log(printResult2());
function throwError(message, errorCode) {
    throw {
        message: message,
        errorCode: errorCode
    };
}
throwError('not found', 404);
function whileLoop() {
    while (true) {
        console.log('hahh');
    }
}
whileLoop();
