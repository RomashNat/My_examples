const list = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);
document.querySelector('input').addEventListener('keypress', handEvent);

function handleClick() {
    const newTodo = this.previousElementSibling.value.trim();

    if (newTodo) {
        // add todo
        createTodo(newTodo);
        saveToStorage(newTodo);
        this.previousElementSibling.value = '';
    } else {
        alert('input field is empty ');
    }
}

function saveToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];

    localStorage.setItem('tasks', JSON.stringify([...todos, todo]));
}


function removeFromStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem(
        'tasks',
        JSON.stringify(todos.filter((todoTask) => todoTask !== todo)),
    );
}
function handEvent(event) {
	if (event.key === 'Enter') {
		createTodo(this.value);
		saveToStorage(this.value);
		this.value = '';
	}
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('tasks'));

    if (todos) {
        todos.forEach((todo) => createTodo(todo));
    }
}

function createTodo(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.className = 'todo-item';
    li.addEventListener('click', removeTodo);

    list.appendChild(li);
}

function handEvent(event) {
	if (event.key === 'Enter') {
		createTodo(this.value);
		saveToStorage(this.value);
		this.value = '';
	}
}

function removeTodo() {
    this.removeEventListener('click', removeTodo);
    removeFromStorage(this.textContent);
    this.remove();
}