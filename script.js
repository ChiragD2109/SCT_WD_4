const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addTask(taskInput.value, taskDate.value);
  taskInput.value = '';
  taskDate.value = '';
});

function addTask(text, dateTime) {
  const li = document.createElement('li');
  const formattedDate = new Date(dateTime).toLocaleString();

  li.innerHTML = `
    <div><strong>${text}</strong><br><small>📅 ${formattedDate}</small></div>
    <div class="task-actions">
      <button class="complete-btn">✓</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  // Mark Completed
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Edit
  li.querySelector('.edit-btn').addEventListener('click', () => {
    const newText = prompt('Edit task:', text);
    if (newText) {
      li.querySelector('strong').textContent = newText;
    }
  });

  // Delete
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
}
