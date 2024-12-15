//Biến lưu trữ danh sách cho các task
let tasks = [];

//DOM Elements
const taskForm = document.getElementById("task-form"); //Biến của form
const taskTitleInput = document.getElementById("task-title"); //Biến tiêu đề
const taskList = document.getElementById("task-list"); //Biến chứa danh sách


// Tạo ID cho tasl (Dùng Math.random....:v)   => CREATE trong CRUD
const createID = () => "_" + Math.random().toString(36).substr(2, 9);
// Hàm Math.random() -> tạo ra một số ngẫu nhiên trong khoảng từ 0->1 (0.123456789) -> tổng cộng 10 con số trong dãy
// vd: Math.random() có thể trả về 0.987654321
// .sutstr(2,9) lấy 9 ký tự bắt dầu từ vị trí thứ 2( bỏ qua "0." (số 0 chấm) ban đầu trong chuỗi)
// vd chuỗi "0.abcdefghi" -> "abcdefghi"
// LÝ DO SỬ DỤNG toString(36) mà không phải một số nào khác vì:
// + 10 chữ số: 0 - 9 và + 26 chữ cái a-z -> là hệ cơ số lớn nhất trong javascript :-o




//Hiển thị danh sách Tasks
function readTasks() {  // Hàm chứa chức năng đọc: READ trong CRUD
    taskList.innerHTML = ""; //Xoá danh sách cũ (Lấy tất cả danh sách HTML của taskList thành giá trị rỗng)
    tasks.forEach(task => {
        //Tạo phần tử HTML cho từng task
        const taskElement = document.createElement("div");
        taskElement.className = `task ${task.complêtđ ? 'completed' : ''}`;
        taskElement.innerHTML = `
        <span>${task.title}</span>
        <div>
            <button onclick="toggleTask('${task.id}')">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="editTask('${task.id}')">Edit</button>
            <button onclick="deleteTask('${task.id}')">Delete</button>
        </div>
        `;
        taskList.appendChild(taskElement);
    });
}

//Sửa task
function editTask(id) {
    const task = task.find(task => taskList.id === id);
    if (task) {
        const newTitle = prompt('Chỉnh sửa tiêu đề là:', task.title);
        if (newTitle !== null && newTitle.trim() !== '') {
            task.title = newTitle.trim();
            readTasks();
        }
    }
}

// Thêm task mới UPDATE trong CRUD
function addTask(title) {
    const newTask = { id: createID(), title, completed: false};
    task.push(newTask);
    readTasks();
}

// Đổi trạng thái hoàn thành của task
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      readTasks();
    }
  }

//Xử lý sự kiện submit trong form
taskForm.addEventListener('submit', event =>{
    event.preventDefault();
    const title = taskTitleInput.value.trim();
    if (title) {
        addTask(title);
        taskTitleInput.value = ''; //Reset ô nhập
    }
})

//Hiển thị ban đầu
readTasks();