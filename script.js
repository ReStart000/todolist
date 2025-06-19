let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleDone(${index})">${task.text}</span>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    list.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("task-input");
  if (input.value.trim() === "") return;
  tasks.push({ text: input.value, done: false });
  input.value = "";
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
