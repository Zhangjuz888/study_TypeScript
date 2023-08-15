
// 数组（Array）和元祖（Tupple）
let list1: number[] = [1,2,3,4];
let list2: Array<number> = [4,5,6];

// 声明数组中每一个类型
let list4 = [1, '3'];
// any泛型能够存放不同类型的元素
let list5: any[] = ["1",3, true];

// tupple(元祖)声明方法 PS：固定长度，固定类型
// 元祖方法只能是固定长度固定类型
let person1: [number, string] = [1,'zhangsan'];
// 不能将第一位分配string
person1[0] = 'aaa';
// 不能将第二位分配number
person1[1] = 1;
// 不能超出两位的数组
person1[2] = 'ssfsd';