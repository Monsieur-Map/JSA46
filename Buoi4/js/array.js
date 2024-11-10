//Khởi tạo --------------------------------------------------------------------------
var arr = [1,2.5,"a",function(){},{},null,undefined]; //(Cách 1)
var arr2 = new Array([1,2.5,"a",function(){},{},null,undefined]) //(Cách 2)
console.log(typeof arr); //Kiểu object
console.log(Array.isArray(arr2)); //True 
console.log(Array.isArray({})); //false

//Truy xuất mảng
console.log(arr.length); //Xuất ra 7
console.log(arr[4]); //Lấy theo phần tử index là `{}`

//Các hàm bổ trợ
//Lỗi cơ bản khi clone/ copy array
var clone_arr = arr;
clone_arr[1] = "abc";
console.table(clone_arr);
console.table(arr);
// -> spread operator
var clone = [...arr2];
clone.push(10); //Thêm số 10 tại vị trí cuối cùng của mảng
console.table(clone);
console.table(arr2);

//toString ------------------------------------------------------------------
console.log(arr.toString());

//join-------------------------------------------------
console.log(arr2.join(" - ")); 

//pop ---------------------------------------------------------------------
// return lại List sau khi đã xoá phần tử
console.log(arr2.pop()); //Xoá phần tử cuối (tức là xoá số 10 mới được thêm vào từ lúc push
[].pop(); //undefined\

//shift, unshift-------------------------------------------------
//shift: xoá phần tử đầu tiên của mảng + return lại phần tử đã xoá
console.log(arr.shift()); //Láy được số 1
console.log([].shift()); //undefined

//unshift: thêm phần tử đầu tiên trong mảng + return lại phần tử đổi mới
console.log(arr.unshift(123)); //Lấy được 7 phần tử

//Splicing -----------------------------------------------------------------
var subArr = arr.splice(1,2); //Xoá 2 phần tử tính từ index 1 
console.log(subArr);
//chèn thêm 6 phần tử vào vị trí thứ nhất, cũng như ko xoá ai hết
var subArr1 = arr.splice(1,0,6);
console.log(subArr1);

//thay thế vị trí thứ nhất thành thứ 6
var subArr2 = arr.splice(1,1,6);
console.log(subArr2);

//concat (nối lại với nhau)----------------------------------------------------------
//Nối array tức các mảng lại với nhau
var arr3 = [5,6,7]
const a = arr3.concat([1,2,3]);
console.table(a);

//slicing-------------------------------------------------------------------------
//vị trí thứ 2 từ phải trái thay vì theo thứ tự từ trái sang phải từ đầu
//return mảng mới
const b = arr3.slice(-2.1); // ra vị trí 6,7
console.log(b);

