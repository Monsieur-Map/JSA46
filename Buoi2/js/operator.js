// 1. Toán tử số học  (Arithmetic) ("+","-","*","/","%")----------------------------------------------
// var a = 12**2 //Hàm luỹ thừa

// // ***1. Tiền tố (prefix) (a++, a--)
// console.log(++a); //144
// console.log(a); //145

// console.log(12%2); //Chia lấy phần dư -> Ans: 0
// console.log(13/2); // Chia lấy phần nguyên 6.5


// 2. Toán tử gán (Assignment) ("=", "-=", "+=", "/=", "**=")---------------------------------------
// var x = 10;
// x += 100; // x = x + 100;


// 3. Toán tử so sánh (Comparison)  (">", "<", "!=", "<=", ">=", "==", "===")-------------------------
// return -> boolean (true - false)
/**
 * 6 kiểu dữ liệu -> convert boolean -> false (còn lại trả về true)
 * 0
 * false
 * chuỗi rỗng "" hoặc ''
 * undefinded
 * nukk
 * NaN
 */
const arr = []; // nhập {} " " "0"
if (arr) console.log("abc");
else console.log("xyz");


// // Nhập tên 1 người -> Nếu không nhập -> Yêu cầu nhập tiếp
// const full_name = prompt("Your name: ")
// //template string  ` ...${}`
// if (full_name) console.log(`Your name is ${full_name}`);
// else console.error("Cần nhập tên");

//4. Toán tử logic (|| &&!)----------------------------------------------
// *** and trả về giá trị vế phải trong biểu thức
// var result = "A" && "B" & "C";
// console.log("result",result); //null

// *** and gấp giá trị khác 6 giá trị falsse-> gắn kết quả giá trị về phải 
// var result = null && "B" && "C";
// console.log("result", result); //null

//*** or: trả về giá trị khác 6 giá trị trên / trả về vế trái
// var result = "A" || "B" || "C";
//console.log("result", result); // "A"

// Nếu cả 2 vế -> giá trị trả về falsse -> lấy cái cuối
// var result = undefined || null || "B" || NaN;
// console.log("result", result); // "B"

// *** not: trả về phủ định
// var result = !("" && 0 && "A"); //true
// var result = !(false && false) || true; //true
// console.log("result",result);

