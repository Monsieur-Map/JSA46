// 1. Kiểu dữ liệu nguyên thuỷ: Primitive data  ---------------------------------------
// Lưu vàu vùng nhớ RAM: khi gán lại giá trị -> tạo ra 1 vùng nhớ mới để lưu value -> gọi là nguyên thuỷ
/**
 * Number
 * String
 *  Boolean
 * Undefinded ( không sử dụng = )
 * Null
 * Symbol - ES6
 */

// console.log(typeof 1); //function
// console.log(typeof null); //object
//=> chỉ có 2 kiểu dữ liệu nguyên thuỷ là kiểu dữ liệu function và kiểu dữ liệu object

//2. Dữ liệu phức tạp: Complex Data ------------------------------
/**
 * Function
 * Object types (object, array)
 */

// var my_func = function () {
//     console.log("first");
// };
// console.log(typeof my_func); //function
// console.log(typeof new Array(10)); // Bất kì những hàm gì sử dụng được cho Array tức là sử dụng được cho Object

// toán tử so sánh -------------------------------------------------
// console.log("1" !== 1); //true
// console.log("1" === 1); //false

// Toan tu 3 ngoi ------------------------------
// const func = () => "a";
// function func() {
//   return "a";
// }

let a;
if (a) a = "abc";
else a = 123;

const b = a ? (a = "abc") : (a = 123);
// <dieu kien> ? <true> : <false>

let arr;
arr?.forEach((item) => console.log(item));
