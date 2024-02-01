document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    const addItemInput = document.getElementById('addItemInput');
    const addTaskButton = document.getElementById('addTaskButton');

    function createTaskElement(taskText) {
      const li = document.createElement('li');
      li.className = 'task';

      const input = document.createElement('input');
      input.type = 'text';
      input.value = taskText;
      input.disabled = true;

      const editButton = document.createElement('button');
      editButton.className = 'edit-btn';
      editButton.innerText = 'Edit';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-btn';
      deleteButton.innerText = 'Delete';

      li.appendChild(input);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      return li;
    }

    function addTask() {
      const taskText = addItemInput.value;
      if (taskText) {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        addItemInput.value = '';
      }
    }

    function editTask(event) {
      const li = event.target.parentNode;
      const input = li.querySelector('input');
      input.disabled = !input.disabled;
      input.focus();
    }

    function deleteTask(event) {
      const li = event.target.parentNode;
      taskList.remove(li);
    }

    function initializeEventListeners() {
      addTaskButton.addEventListener('click', addTask);

      taskList.addEventListener('click', function (event) {
        if (event.target.className === 'edit-btn') {
          editTask(event);
        } else if (event.target.className === 'delete-btn') {
          deleteTask(event);
        }
      });
    }

    initializeEventListeners();
  });