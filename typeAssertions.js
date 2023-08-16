// 类型适配（类型断言）type Assertions
/*
    类型适配英文叫type assertions， 翻译为“类型断言”，主要作用是对某个类型作出限定的说明，使用JavaScript的时候，
    完全感受不到它的存在，但是在使用typeScript的时候难免会碰到具有歧义的类型，这种情况就需要断言来解释限定的类型了。
*/
var message;
message = "abc";
message.endsWith('c');
// 类型适配(ps: 现在把它由any转化为string进行使用)
var ddd = message.endsWith('b');
console.log(ddd);
// 第二种适配方法 as
var ddd2 = message.endsWith('as');
console.log(ddd2);
