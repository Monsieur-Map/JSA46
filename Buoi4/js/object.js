// // Khai báo (Declare) ------------------------------
// var newObj = {
//     "full_name" : "Monsieur_MAP",
//     age: 14,
//     // Lưu ý: use comma instead of semi-colon
// };

// // object construction (Xây dựng đối tượng - hàm tạo)
// // Định nghĩa đối tượng (bản vẽ)
// var User_A = function() {}; // function() dấu ngoặc đơn viết dính liền không được tách ra

// //expression funnction
// function User(firstName, lastName, ava){
//     // Dùng this để lấy dữ liệu, cũng có thể đại diện cho phần từ để gán (giống dạng save trong python)
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.ava = ava;

//     this.getName = function() {
//         return this.firstName + " " + this.lastName; //Bắt buộc phải có this nha, không thì sẽ...... @_@
//     };
// }

// // tạo đối tượng
// var me = new User("Phúc", "mai",  "...");
// console.table(me); //Phần cách các giá trị dưới dạng table
// console.log(me.constructor == User);
// //object thường
// const student = {name: "abc", age: 12};
// console.table(student);
// console.log(student.constructor)
// console.log(student._proto_)

// /**
//  * Nếu đối tượng tạo từ object constructor # object thường
//  * Khi in đối tượng sẽ có thêm phần _phroto_ => Mở ra constructor
//  */

// // Thêm thuộc tính
// me.class = null
// console.table(me) //tạo ra một table mới nhưng có chèn thêm một class null
// console.log(me._proto_)

// //object prototype (chứa các thuộc tính, kế thừa các object khác trong giá trị chứa, vị dư như "me" bên trên)------------------------------------------------------------
// // Thêm một thuộc tính
// // Khong nhận được giá trị truyền vào từ constructor
// User.prototype.email = "maianphuct24@gmail.com";
// // User.prototype.getEmail = () => this.email; //Không được xài arrow function () => thì this sẽ không nhận được -> không trả được email
// User.prototype.getEmail = function() {
//     return this.email;
// }

// const other = new User("abc","abc","...");
// console.table(other);

// // read, update dữ liệu-----------------------------------------------------
// me.firstName = "ABC";
// me["lastName"] = "XYZ";
// console.table(me);

// console.log(me["abc"]); //vì trong array của me không chứa phần tử "abc" -> xuất ra undefined
// console.log(me.abc); // undefined

// //delete---------------------------------------------------------------------------
// delete me["class"]; //Delete đi class : null
// delete me.ava; //Delete đi phần từ ava : "..."
// console.table(me); 