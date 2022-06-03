// import {Dog} from "./dog";
//
// let dog = new Dog(20, 'den');
// dog.color = 'vang';
//
// let sum = (number1: number, number2: number): number => number1 + number2;
// console.log(sum(5, 2));
// let arr: number[] = [1, 2, 3, 4, 5];
// let arr1: number[] = [...arr];
//
// function sum1(...numbers: number[]): number {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// console.log(sum1(1, 2, 3, 4, 5));
//
// let arr2: [string, number] = ["1",2]

import {Stopwatch} from "./stopwatch";

let stopwatch: Stopwatch = new Stopwatch();
stopwatch.start();
let sum = 0;
for (let i = 0; i < 100000000000; i++) {
    sum += i;
}
stopwatch.stop();
console.log(stopwatch.getElapsedTime());
