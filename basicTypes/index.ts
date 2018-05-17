/**
 * 基础类型
 */

// 布尔值
let isDone: boolean = false;
console.log(isDone);

//数字
let decLiteral: number = 6; //十进制
let hexLiteral: number = 0xf00d; //十六进制
let binaryLiteral: number = 0b1010; //二进制
let octalLiteral: number = 0o744; //八进制

//字符串
//可以使用单引号或者双引号表示字符串

let username: string = "blob";
username = "csq";

//还可以使用模板字符串``
let age: number = 27;
let sentence: string = `hello ${username} 你已经${age}岁了`;

//数组
let list: number[] = [1, 2, 3, 4];
let array: Array<number> = [1, 2, 3, 4, 6];
// let tes: Array<number> = ["1", "2", "3"]; 这是错误的

//元组Tuple
//元组类型允许一个一直元素数量和类型的数组，各元素的类型不比相同。比如你可以定义一对值分别为
//string和number类型的元组
let tuplex: [string, number]; //声明类型
tuplex = ["hello", 10]; //赋值
// tuplex = [11, "csq"]; //错误示范

//当访问一个已知索引的元素会得到正确的类型
console.log(tuplex[0].substr[1]);
// console.log(tuplex[1].substr[1]); //错误，number类型没有substr方法 即使语法错误也会产出

//当访问一个越界的元素，会使用联合类型替代
tuplex[2] = "csq";
// tuplex[3] = true;//错误，原始声明中没有boolean类型



