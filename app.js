class Todo {
    constructor(text) {
        this.text = text;
        this.completed = false;
        this.id = Date.now();
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    delete() {
        const index = todos.findIndex(todo => todo.id === this.id);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        render();
    }
}

let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text) {
        const newTodo = new Todo(text);
        todos.push(newTodo);
        render();
        input.value = '';
    }
}

function render() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;
        
        const actions = document.createElement('div');
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.onclick = () => {
            todo.toggleComplete();
            render();
        };
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => todo.delete();
        
        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);
        
        li.appendChild(textSpan);
        li.appendChild(actions);
        todoList.appendChild(li);
    });
}

// Initial render
render();