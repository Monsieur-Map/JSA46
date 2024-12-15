// Biến lưu trữ danh sách các task
let tasks = [];

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskList = document.getElementById('task-list');

// Tạo ID duy nhất cho task
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

// Hiển thị danh sách tasks
function renderTasks() {
  taskList.innerHTML = ''; // Xóa danh sách cũ
  tasks.forEach(task => {
    // Tạo phần tử HTML cho từng task
    const taskElement = document.createElement('div');
    taskElement.className = `task ${task.completed ? 'completed' : ''}`;
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

// Thêm task mới
function addTask(title) {
  const newTask = { id: generateId(), title, completed: false };
  tasks.push(newTask);
  renderTasks();
}

// Sửa task
function editTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    const newTitle = prompt('Edit task title:', task.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      task.title = newTitle.trim();
      renderTasks();
    }
  }
}

// Xóa task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Đổi trạng thái hoàn thành của task
function toggleTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

// Xử lý sự kiện form submit
taskForm.addEventListener('submit', event => {
  event.preventDefault();
  const title = taskTitleInput.value.trim();
  if (title) {
    addTask(title);
    taskTitleInput.value = ''; // Reset ô nhập liệu
  }
});

// Hiển thị ban đầu
renderTasks();
