// 2 cách khai báo
// var firstName = "Brandon";  // cách 1 - type string
// var lastName = new String("Mai"); //Cách 2 - type object
// Bất kì chỗ nào có chữ new thì sẽ trả về kiểu dữ liệu object

// Nếu 1 trong 2 không phải number -> kiểu nối chuỗi
// console.log(`Tôi là: ${firstName} ${lastName}`);
// console.log(firstName + " " + lastName);

// //back flash ("\") chèn ký tự đặc biệt
// console.log('Đây là dấu \n \t \\ ');

// //độ dài chuỗi
// console.log(firstName.length);

//Hàm hỗ trợ
//1. find index
// console.log(firstName.indexOf("o")); // xuất ra giá trị  5
// console.log(firstName.search("o")); // Xuất ra giá trị 5
// console.log(firstName.lastIndexOf("o")); //Xuất giá trị 5 luôn

// //2. cắt chuỗi
// var subString = firstName.slice(0,-2); // Chữ Brand
// console.log(subString); 

// //3. replace + replace all
// var replaceString = firstName.replace("n","2"); //Thay thế chữ n đầu tiên bằng số 2
// console.log(replaceString);
// var replaceAllString = firstName.replaceAll("n", "w"); // way1
// console.log(replaceAllString)
// var replaceAllString_2 = firstName.replace(/n/g, "."); // way2
// console.log(replaceAllString_2);

// //4. Uppercase + lowercase
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// //5. trim
// var str = "            ABC              "
// console.log(str.trim()); //Cắt khú đầu lẫn đuôi
// console.log(str.trimEnd()); //Cắt khúc đuôi
// console.log(str.trimStart());

// //6. split (string -> arra)
// var numbers = "1,2,3,4,5,6,7,8,9";
// console.log(numbers.split(",")); //-> trả về kiểu Array

// //87. Get a character index
// //Trả về chuỗi rỗng "" nếu index > length
// console.log(firstName.charAt(15));
// // trả về undefinded nếu index > length
// console.log(lastName[3]);