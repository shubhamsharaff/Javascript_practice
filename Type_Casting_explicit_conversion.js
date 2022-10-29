// JavaScript Explicit Conversion
// You can also convert one data type to another as per your needs. 
// The type conversion that you do manually is known as explicit type conversion.

// 1. Convert to Number Explicitly

// To convert numeric strings and boolean values to numbers, you can use Number(). For example,
let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0