//There are three types of variable in JavaScript..
// 01- Var, 02- let, 03- const//
 // “var” variables can be redeclared and redefined, meaning that once values are declared, they can be changed and mutated.
 // let can be redeclared but can not be redefined.
 // const will neither be redeclared nor be redefined..

 //var 

 var a=5;
 var a=10;
 console.log(a)

/// let

 let a=5;
 let a=10;
 console.log(a) //// this will create an error bcz Identifier 'a' has already been declared.

 let assignment=20;
 assignment=30;
 console.log(assignment)

 // const//

 const x=50;
 console.log(x)

 const y=100;
 y=200; // this will not be updated..
 console.log(y) 