// 联合（Union）与文献（Literal）
// let union : String | number;
// union = 'ss';
// union = 1;
// // union = true; 报错
// let union2: number | string | boolean | string[];
function merge(n1, n2, resultType) {
    if (resultType === "as-string") {
        return "".concat(n1).concat(n2);
    }
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return "".concat(n1).concat(n2);
    }
    return n1 + n2;
}
var mergeNumber1 = merge(2, 5, "as-number");
var mergeNumber2 = merge(2, 5, "as-string");
var mergeString3 = merge('hello', 'world', "as-string");
console.log("mergeNumber1------", mergeNumber1);
console.log("mergeNumber2------", mergeNumber2);
console.log("mergeString3------", mergeString3);
// 字面量类型
// let union3: 0 | 1 | 2
// // union3 = 4 报错，超出【0，1，2】这个集合不行
// // 就像const定义一样，都是属于字面量的类型
// let lieral : 1 | "2" | true | [1,2,3,4]
