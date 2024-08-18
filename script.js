document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load tasks from localStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Function to render tasks
    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1);
                updateTodos();
            });
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    };

    // Function to update tasks
    const updateTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    };

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = input.value.trim();
        if (newTodo) {
            todos.push(newTodo);
            input.value = '';
            updateTodos();
        }
    });

    // Initial rendering of tasks
    renderTodos();
});
