
// void、undefind、never

/*
undefined到底是一个值还是一个类型呢？要怎么理解？
1、声明一个变量parameter，不赋值

let parameter;

console.log('parameter=', parameter); //parameter undefined

此时parameter根据前后文推导一个any类型，因未赋值，输入值为undefined



2、声明一个变量parameter1，指定类型为undefined

let parameter1: undefined;

console.log('parameter1=', parameter1); //parameter1 undefined

此时parameter1是一个undefined，打印值也是undefined

*/

// 因为以下函数没有任何返回值所以定义为void
function printResult () : void {
    console.log(`hei`);
}

console.log(printResult());

// 如果定义为undefind也表示不存在，但是这里定义的上的是指物质不存在。而void所说的的不存在是指本身就不存在；
function printResult2 () : undefined {
    console.log(`hei`);
    return;
}

console.log(printResult2());

function throwError (message: string, errorCode: number): never {
    throw {
        message,
        errorCode
    }
}
throwError('not found', 404);

function whileLoop (): never {
    while (true) {
        console.log('hahh');
        
    }
}

whileLoop()



