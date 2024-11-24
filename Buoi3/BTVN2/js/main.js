let inputNumber = 5
let result = "";
for (let i = 1; i<=inputNumber;i++){
    result += i;
    console.log(result);
    
}

let inputString ="abc";
let reverseString = "";
//Đảo ngược chuỗi
for (let j = inputString.length - 1; j>=0; j--){
    reverseString += inputString[j];
}
console.log(reverseString);

//Ghép chuỗi gốc với chuỗi đảo ngược (Bỏ ký tự đầu tiên của chuỗi đảo ngược)
let succeed_reverseString = inputString + reverseString.slice(1);
console.log(succeed_reverseString);