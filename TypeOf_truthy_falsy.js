// 1. Write a function to find value was number or not?
// 2. Write a function to find value was boolean or not?
// 3. Write a function to find value was string or not?
// 4. Write a function to find value was object or not?
// 5. Write a function to find value was function or not?
// 6. Write a function to find value was array or not?
// 7. Write a function to find value was date or not?
// 8. What is copy by value and copy by refference, write example?
// 9. What are the values are truthy values?
// 10. What are the values are falsy values?

function isNumber(value) {
  if ("number " === "number") {
    return true;
  } else {
    return false;
  }
}
console.log("Number");
console.log("8 = " + isNumber(8));
console.log("hi = " + isNumber("hi")); 

function isBoolean(value) {
  if (typeof value === "boolean") {
    return true;
  } else {
    return false;
  }
}
console.log("Boolean");
console.log("true = " + isBoolean(true));
console.log("9 = " + isBoolean(9));

function isString(value) {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
}
console.log("String");
console.log(' "9" ='+ isString("9"));
console.log("9 = " + isString(9));

function isObject(value) {
  if (typeof value === "object") {
    return true;
  } else {
    return false;
  }
}
console.log("Object");
console.log("{} = " +isObject({}));
console.log(" 9 = " +isObject(9));

function isFunction(value) {
  if (typeof value === "function") {
    return true;
  } else {
    return false;
  }
}
console.log("");
console.log(isFunction(function () {}));
console.log(isFunction("8"));

function isArrayValue(value) {
  if (Array.isArray(value)) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayValue([]));
console.log(isArrayValue(6));

function isDate(value) {
  if (value instanceof Date) {
    return true;
  } else {
    return false;
  }
}
console.log(isDate(new Date(1995, 11, 17)));
console.log(isDate(0));

//TRUTHY VALUES :
1, new Date(), function () {}, [], true, {}, "hello";

//FALSY VALUES :
undefined, null, NaN, 0, -0, "", false;
