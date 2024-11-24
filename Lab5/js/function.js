//Khai báo function -------------------------------------------------------------------------------

// Cách 1: function có tên
//function <function_name> (parameters) {                parameter: giá trị truyền vào
//    ...
//    Trả về giá trị cụ thể
//    return ...; 
//}


function sum (a,b){
    total = a + b;
    return total;
}
//Gọi lại hàm để thực thi
console.log(sum(3,5));  // Nếu ở trên đã console log rồi thì ở trên không cần console log nữa

//Cách 2: Function không có tên/ hàm ẩn danh-----------------------------------------------
//Gán function vào biến sum
const sum_2 = function (a,b) { 
    return a+b;
};
console.log(sum_2(1,2)); //Output: số 3

// Hàm hello -> truyền tham số name -> console log: "Hello" + name
const hello = function name (){
    console.log("Hello " + name);
    return;
};
//Không return -> in ra giá trị undefined
console.log(hello("Mai An Phúc"));

//Local storage---------------------------------------------------------------
// Lưu giá trị key: value
// Nếu vale khác kiểu dữ liệu string => không hiển thị được
localStorage.setItem("name", {}); 
// Mở dev tool -> application tab -> Localstorage
// -> Mở mục -> Doamin (url) của trang hiện tại -> Kiểm tra lại
//Phải lấy giá trị bằng key chứ không được gọi bằng value
console.log(localStorage.getItem("name"));

