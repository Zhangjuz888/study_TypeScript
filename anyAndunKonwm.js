// any和unkonwn
// any可以定义任意类型，unknown作为未知类型，不保证类型，但是能保证类型安全
// let randomValue: any = 666; 
var randomValue = 666;
randomValue = true;
randomValue = 'str';
randomValue = {};
if (typeof randomValue === 'function') {
    randomValue();
}
if (typeof randomValue === 'string') {
    randomValue.toUpperCase();
}
