
// Keywords used to declare the variables
// let => Block scope
// const => Block scope
// var => Function scope


// Types of scope

// Global Scope
// Variables or functions declared directly/outside of any block or function is in global scope.

// let a = 10;
// if(true) {
//     console.log(a);
//     a = 20;
// }

// function print() {
//     a = 30;
//     console.log(a)
// }
// print();
// a = 40;

// console.log(a);

// if(true) {
//     print();
// }


// Block Scope
// {
//     let blockVar  = 10;
//     console.log(blockVar);
//     {
//         blockVar = 20;
//         console.log(blockVar);
//         {

//         }
//     }
//     console.log(blockVar);
// }


// Function scope
// function scope() {
//   if(true) {
//       var ifVar = 'Some';
//       console.log(ifVar)
//       ifVar = 'New';
//   }
//   console.log(ifVar);
// }
// scope();

// Hoisting
hoist();
function hoist() {
    console.log('hoist');
    console.log(hoistVar);
}


//hOISTING :

//hoistng  concept is available only in javasctipt. 
//js move the fucntions and variable declarations to the top of the current scope.
//It automatically happens before executing the code.
// it works fine with "var" and does not apply on let and const.
