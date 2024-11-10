//Phần 1 nhỏ
// Tạo một mảng số nguyên ----------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];

// Sử dụng vòng lặp for để duyệt qua mảng  (CÁCH 1)
console.log("Duyệt mảng bằng vòng lặp for:");  // Truy cập từng phần tử trong mảng theo các chỉ số (index)
for (let i = 0; i < numbers.length; i++) {
    console.log(`Phần tử tại vị trí ${i}: ${numbers[i]}`);
}

// Sử dụng vòng lặp for...of để duyệt qua mảng   (CÁCH 2)
console.log("Duyệt mảng bằng vòng lặp for...of:"); // Duyệt trực tiếp qua từng phần tử trong mảng mà không cần chỉ số (index) trong cách 1
for (let num of numbers) { 
    console.log(`Phần tử: ${num}`); 
}

// Sử dụng vòng lặp forEach để duyệt qua mảng   (CÁCH 3)
console.log("Duyệt mảng bằng forEach:"); //  là một phương thức của mảng, nhận một hàm callback để xử lý từng phần tử. Hàm callback nhận 2 tham số: giá trị của phần tử (num) và vị trí của nó (index).
numbers.forEach((num, index) => {
    console.log(`Phần tử tại vị trí ${index}: ${num}`);
});

//Phần 2 nhỏ -----------------------------------------------------------------------------------------------------------------------------
// Sử dụng if - else để tách số chẵn và lẻ
// Khai báo hai mảng để lưu số chẵn và số lẻ
let evenNumbers = [];
let oddNumbers = [];

// Duyệt qua từng phần tử trong mảng
for (let num of numbers) {   // Sử dụng vòng lặp for... of
    if (num % 2 === 0) {
        // Nếu là số chẵn
        evenNumbers.push(num);
    } else {
        // Nếu là số lẻ
        oddNumbers.push(num);
    }
} // Số chẵn và lẻ được thêm vào mảng bằng phương thức push*

// In kết quả
console.log("Các số chẵn:", evenNumbers);
console.log("Các số lẻ:", oddNumbers);

// Phần 3 nhỏ ----------------------------------------------------------------------------------------------------------------------------------
// Tính tổng các số chẵn và lẻ bằng cách sử dụng các toán từ phù hợp
let evenSum = 0; // Nếu đề hỏi tính các phép nhân thì thay let evenTimes = 1;
let oddSum = 0;

// Duyệt qua từng phần tử trong mảng
for (let num of numbers){
    if (num % 2 ===0){
        //Nếu là số chẳn, cộng lại tổng số chẵn với nhau
        evenSum += num;
    } else {
        //Nếu là số lẻ, cộng lại tổng số lẻ với nhau
        oddSum += num;
    }
}
console.log("Tổng số chẵn là: ",evenSum);
console.log("Tổng số lẻ là: ", oddSum);

//Phần 4 nhỏ ---------------------------------------------------------------------------------------------------------------------
//Đếm coi có bao nhiêu số lớn hơn ngưỡng cho trước. In ra console
let beta_numb = 2; // Số được cho trước
let count_num = 0; //Tính tổng của các số( luôn gán giá trị 0)
//Duyệt qua từng phần tử trong mảng
for (let num of numbers){
    if (num > beta_numb){
        count_num++; //Tính tổng số lượng số lớn hơn 2 (gồm có 3,4,5)
    }
}
console.log(`Số lượng các số số lớn hơn ${beta_numb} : ${count_num}`);


