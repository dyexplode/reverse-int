// Old syntaxis
// module.exports = function reverse (n) {
//   const number = Math.abs(n).toString();
//   let res ='';
//   for (let i = number.length; i>0; i--){
//     res = `${res}${number[i-1]}`;   
//   };
//   return res;
// }

//New syntaxys
module.exports = reverse = (n) => Math.abs(n).toString().split('').reverse().join('')