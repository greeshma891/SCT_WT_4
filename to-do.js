const todoList = [];

      function renderTodoList() {
        const todoContainer = document.querySelector('.js-todo-container');
        let todoListHTML = '';

        if (todoList.length > 0) {
          todoContainer.style.display = 'block';
        } else {
          todoContainer.style.display = 'none';
        }

        todoList.forEach((todoObject, index) => {
          const { name, dueDate } = todoObject;
          const html = `
            <li>
              <div class="todo-item">
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-todo-button js-delete-todo-button">Delete</button>
              </div>
            </li>
          `;
          todoListHTML += html;
        });

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;

        document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
          deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
          });
        });
      }

      document.querySelector('.js-add-todo-button').addEventListener('click', () => {
        addTodo();
      });

      function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;

        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;

        if (name && dueDate) {
          todoList.push({ name, dueDate });
          inputElement.value = '';
          dateInputElement.value = '';
          renderTodoList();
        }
      }

      renderTodoList(); 