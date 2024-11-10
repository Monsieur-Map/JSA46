//Phần 1 nhỏ --------------------------------------------------------------
let surename = "Mai";
let middle_name = "An";
let primary_name= "Phuc";
// Nối chuỗi
let fullname = surename + " " + middle_name + " " +primary_name ;
console.log("Họ và tên: ",fullname);
//Cắt chuỗi
let subStr = fullname.substring(0,6); //Cắt vị trí từ 0 ->6
console.log(subStr);
// Tìm độ dài chuỗi
console.log("Độ dài của chuỗi là: ",fullname.length);
//Phần 2 nhỏ - Khai báo biến-------------------------------------------------
let age = 14; // Kiểu number
console.log(`Tên tôi là ${fullname} và tôi ${age} tuổi`); // fullname kiểu string

// Phần 3 nhỏ ---------------------------------------------------------------
// Nhận câu từ người dùng
let sentence = prompt("Hãy nhập một câu:");

// Đếm số ký tự trong câu
let length = sentence.length;

// In ra độ dài của câu
console.log(`Độ dài của câu bạn nhập là: ${length} ký tự.`);