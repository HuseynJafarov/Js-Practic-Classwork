// function getSum(n){
//     if(n==1){
//         return n;
//     }else{
//         return n + getSum(n-1);
//     }
// }
// console.log(getSum(4));
// function getFactorial(n){
//     if(n==1){
//         return n;
//     }else{
//         return n * getFactorial(n-1);
//     }
// }
// console.log(getFactorial(5));

//  let students = ["Huseyn","Azer","Maqa","Eli"];
//  let users = [{
//     email:"huseynnj@code.edu.az",
//     password:"12345"
//  },
// {
//     email:"eli@code.edu.az",
//     password:"12345"
// },
// {
//     email:"azer@code.edu.az",
//     password:"12345"
// }]
// students.forEach((elem,index) => {
//     console.log(elem + "-" +index);
// });

// for (const item of students) {
//     console.log(item);
// }

// for (const key in users) {
//    console.log(users[key]);
// }

// let book = {
//     name: "Xosrov",
//     author: "Nizami",
//     pageCount: 1000
// };
// for (const key in book) {
//    console.log(book[key]);
// }

//  let students = ["Huseyn","Azer","Maqa","Eli"];
//  function getStudents(t,m,...arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
//       console.log(m);
//       console.log(t);
//  }
//  getStudents("Huseyn","Azer","Maqa","Eli")

// function evenNum(n) {
//   return n % 2 == 0;
// }
// function oddNum(n) {
//   return n % 2 == 1;
// }
// function thanThree(n) {
//   return n >= 3;
// }
// function numByConditions(arr, callback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }
//   return sum;
// }
// console.log(numByConditions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], thanThree))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filteredNumbers = numbers.filter((m) => m % 2 == 0);
// function sumFilterNumbers(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(sumFilterNumbers(filteredNumbers));
// console.log(filteredNumbers);
// console.log(numbers);
// let numbers = [1, 2, 3, 4];
// console.log(numbers);
// let result = numbers.map(m=>m*2)
// console.log(result);
// numbers.forEach((item, index )=> {
//     numbers[index] = item * item
// });
// console.log(numbers);

// let user = [
//     {
//         name: "Ayxan",
//         surname: "Nabatov",
//         age: 23,
//     },
//     {
//         name: "Huseyn",
//         surname: "Ceferov",
//         age: 23,
//     },
//     {
//         name: "Orxan",
//         surname: "Qasimov",
//         age: 25,
//     },
// ];

// let date = new Date()
// // console.log(date);

// let result = user.map(m=>{
//     return{
//         fullName: `${m.name} ${m.surname}`,
//         yearsOfBrith: date.getFullYear() - m.age
//     }
// })
// console.log(result);