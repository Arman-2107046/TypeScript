"use strict";
// //--infinite loop
// //--throws error
// //--var that can never have a value
// function throwError(msg: string):never
// {
//     throw new Error(msg);
// }
// function infiniteLoop():never
// {
//     while(true){}
// }
// let x:never;
// function neverReturns():never
// {
//     while(true){}
// }
// //does not show any error because it never returns, when something is assigned to x it will show error
// x=neverReturns();
