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
        completeBtn.textContent = '✓';
        completeBtn.onclick = () => {
            todo.toggleComplete();
            render();
        };
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 7l-1.414 1.414L17.586 11H21V13H17.586L19.086 14.414L18 16L15 13L12 16L10.914 14.414L15 11V8H8V11H11.416L9.086 12.586L8 14H11V16H8l4 4h7l4-4h-3l1.086-1.086L19 7z"/></svg>';
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