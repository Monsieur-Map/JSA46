// input, output ---------------------------------------------------
// alert("This is notification!");
// const full_name = prompt("Enter your name");
// console.log(typeof full_name);
// const is_human = confirm("Are you the human?");
// console.log(is_human);

// variable (scope)-----------------------------------------------------

// * VAR @@@@@@@@@@@@@@@@@@@@@@@@@@@
// for (var i = 0; i <10; i++){
//     console.log(i);
// }

// console.log(i); //10

// // * LET  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for (let i = 0; i <10; i++){
//     console.log(i);
// }

// console.log(i); //error (is undefined)

// *CONST @@@@@@@@@@@@@@@@@@@@
// const object = {name: "abc", age:15};
// //object += {} //error ( is constant var)
// object.name = 'xyz';
// console.table(object);

//builtin (set timeout, set interval) ------------------------------
// *** set timeout ***
// WAY1 //
// setTimeout(() => {
//     document.write("<h1>Bonjour À Tous<h1>")
// },1000); // Đây cũng là function nhưng có dấu suy ra nên không cần ghi thẳng function ra nữa nhé!

// // WAY2 //
// function say_hello(){
//     console.warn("Watch out your mouth!")
// }
// setTimeout(say_hello, 1000);  // Có dấu suy ra thì không chọn function 



// *** set interval ***  (Thời gian lặp lại giữa hai ev -> có thể gọi nó là chu kỳ)
const id1 = setInterval(()=>{
    // HTML dom
    document.getElementsByTagName("body")[0]
    .innerHTML += "<h1>Bonjour<h1>";
}, 1000); //1000ms -> tương ứng 1s

const id2 = setInterval(()=>{
    // HTML dom
    document.getElementsByTagName("body")[0]
    .innerHTML += "<h1>À bien tôt<h1>";
}, 1000); 

//Sau 5 lần chạy -> STOP
setTimeout(() => {
    clearInterval(id1);
    //      call back function
    setTimeout(() => {
        clearInterval(id2);
    }, 5000);
}, 5000); //5000ms -> 5s