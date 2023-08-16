// Generics 泛型

// 举例：比如定一个数组，泛型就相当于一个数据的模板，你往它里面输入什么类型，那它就会生成一个确定的类型
// let list1: number[] = [1,2,3,4];
// let list2: Array<number> = [1,2,3,4]; // 泛型写法

// 泛型具体用法：
// 使用泛型能够保证类型的一致性，如果使用any的话，会把所有类型都变成any，这在强类型方法中这是不可取的！
let lastInArray = <T>(arr: T[]) => {
    return arr[arr.length-1];
}

const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray(['a','b','c']);
// 泛型中的联合类型
const l3 = lastInArray<string | number>(['a', 'b', 1]);
// 多泛型表达方式 也可以像普通函数传参一样设置默认值
let makeTuple = <T, Y=number>(x: T, y: Y) => [x, y];

const v1 = makeTuple(1, 'one');
const v2 = makeTuple<boolean>(true, 1);
