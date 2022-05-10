// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
//   console.log(i * i);
// }

// Task ==> Print last 5 values in array and break the loop by using break keyword
// [1, 6, 7, 3, 8, 9, 10, 11, 34, 56, 12, 65, 87, 99]


// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i * i);
// }

// Task ==> Print all odd numbers availabel in below array by using for loop and continue statement
// [1, 6, 7, 3, 8, 9, 10, 11, 34, 56, 12, 65, 87, 99]


// for..in
// let student = { name: 'Student 1', age: 10, class: 'fifth', print: function(){}};
// for (const key in student) {
//     if(key !== 'age' && typeof student[key] !== 'function'){
//     console.log(key + '=' + student[key]);
//     }
// }

// 1. write a function to get all keys as array available in object by using for..in loop

//for..in on array value
// const items = ['val1', 'val2', 'val3'];
// for (const key in items) {
//   console.log(items[key]);
// }


//for..of used to to iterate through arrays and strings

// string
// const value = 'TestString';
// for(let currentChar of value) {
//     if(currentChar.toLowerCase() !== new Date()) {
//         console.log(currentChar);
//     }
// }

//array
// 2. Print all values in below array by using for..of
//  const items = ['item1', 'item2']




// do while :
debugger;
let i = 1, n = 5;
while (i <= n) {
    console.log(i);
    i += 1;
}








