// script.js
// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button onclick="completeTask(this)">Done</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function completeTask(button) {
  const task = button.parentElement.parentElement;
  task.classList.toggle("completed");
}

function deleteTask(button) {
  const task = button.parentElement.parentElement;
  task.remove();
}
