document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.textContent = taskText;

        const editButton = document.createElement('img');
        editButton.src = 'edit.png';  // Add your edit icon image here
        editButton.alt = 'Edit';
        editButton.addEventListener('click', () => editTask(li));

        const deleteButton = document.createElement('img');
        deleteButton.src = 'delete1.png';  // Add your delete icon image here
        deleteButton.alt = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(li));

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(task) {
    task.remove();
}

function editTask(task) {
    const newTaskText = prompt('Edit your task', task.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.firstChild.textContent = newTaskText;
    }
}
