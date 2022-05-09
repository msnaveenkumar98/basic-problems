// Task ==> Print last 5 values in array and break the loop by using break keyword :
// [1, 6, 7, 3, 8, 9, 10, 11, 34, 56, 12, 65, 87, 99]

// const numbers = [70,1, 6, 7, 3, 8, 9, 10, 11, 34, 56, 12, 65, 87, 99];

//  for (let i = numbers.length - 1; i > 0; i--) {
//      if(i===numbers.length-6){
//          break;
//      }
//    console.log(numbers[i]);
//  }

//  Task ==> Print all odd numbers availabel in below array by using for loop and continue statement : 
// [1, 6, 7, 3, 8, 9, 10, 11, 34, 56, 12, 65, 87, 99]

// const items = [1, 6, 7, 3, 8, 9, 10, 11, 34, 56, 12, 65, 87, 99];

// for (let i = 0; i < items.length; i++) {
//   if (items[i] % 2 === 0) {
//     continue;
//   }
//   console.log(items[i]);
// }

// write a function to get all keys as array available in object by using for..in loop.

function getKeys(obj) {
  let details = [];
  for (let x in obj) {
    details.push(x);
  }
  console.log(details);
}

function getValues(obj) {
  for (let x in obj) {
    console.log(x + " : " + obj[x]);
  }
}
  
const person = {
  name: "John",
  age: 20,
  class: "sixth",
  year: 2022,
  status: "Active",
};
getKeys(person);
getValues(person);


const days ={
    first : "sunday",
    second : "Monday",
    third : "Tuesday",
    fourth : "Wednesday",
    fifth : "Thursday",
    sixth : "Friday",
    seven : "Saturday"
}
getKeys(days);
getValues(days);


// Print all values in below array by using for..of
// const items = ['item1', 'item2'];

// const words = ['hello', 'world', 'welcome', 'hi','play'];

// for(const x of words){
//     console.log(x);
// }