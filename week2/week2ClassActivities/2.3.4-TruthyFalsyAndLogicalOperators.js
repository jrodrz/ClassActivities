// Logical Operators
// what do you expect each line to print? false; true; false; true; true
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!(true && false));
console.log(false || !false);
// Logical Operators and Truthy/Falsy
// what do you expect each line to print? null; true; false; false
console.log(undefined || null);
console.log(!``);
console.log(!(1 && "false"));
console.log(NaN || !"true");
// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10
let age = 8;
if (age > 10){
  console.log("full menu")
} else if (age < 10){
  console.log("kids menu")
}
// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.
let num = 0;
// Write your if statement here *
(num<1); console.log("The number is zero")
