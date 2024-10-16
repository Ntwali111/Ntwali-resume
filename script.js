// Function to add tasks to the list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
  
    // Add remove button to each task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
      this.parentElement.remove();
    };
  
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
  
    // Clear the input field
    taskInput.value = '';
  }