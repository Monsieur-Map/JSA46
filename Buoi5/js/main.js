const tasks = [
    { id: 1 , task: "abc"},
    { id: 2 , task: "xyz"},
    { id: 3 , task: "mno"},
    { id: 4 , task: "pqr"},
    { id: 5 , task: "klh"},
];

function addTask() {
    //Lấy dữ liệu từ input fie;d
    const task_name = document.querySelector("#task_input");

    //Kiểm tra ngoại lệ
    if(!task_name.value.trim()){
        alert("Please add content!")
        return;
    }

    //tạo id mới
    const id = tasks.length;

    //tạo object task
    const objectTask = {id:id, task : task_name.value};

    //add vào danh sách
    tasks.push(objectTask)

    //cập nhật giao diện
    showTaskList();
}

function editTask(id){
    

};

function deleteTask(id){
    //get index of object in list
    const ind = -1;
    tasks.map(element, (index) =>{
        if (element.id == id) {
            ind = index;
            return;
        }
    });
    if (ind != -1){
        //delete trong danh sách
        tasks.splice(ind,1);
        //show lại list mới
    } else {
        alert("Phần tử không tồn tại");
    }

    
}

function showTaskList(id){
   //get task list in html
   const taskList = document.getElementById("task_list");
   //Xoá hết dữ liệu cũ
   taskList.innerHTML= ""; //Cho taskList thành tập rỗng
    //for loop to add task
   tasks.forEach(element => {
    const taskItem = document.createElement('li');
        taskItem.id = element.id;
        taskItem.innerHTML = ` 
        ${element.task}
        <button class="edit_btn">Edit</button>
        <button class="del_btn">Delete</button>
                                                `;
   
    // Append the task item to the task_list
    taskList.appendChild(taskItem);
   });

}
//show task list when first load web
showTaskList();
    
//add event cho button add
document.getElementById("add_btn")
.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});