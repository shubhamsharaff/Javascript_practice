// JavaScript Implicit Conversion
// In certain situations, JavaScript automatically converts one data type to another (to the right type). 
// This is known as implicit conversion.

// Example 1: Implicit Conversion to String
// numeric string used with + gives string type

let output;
output = '1' + 2;
console.log(output);// "12"

output = '3' + true; 
console.log(output); // "3true"

output = '3' + undefined; 
console.log(output); // "3undefined"

output = '3' + null; 
console.log(output); // "3null"