function createTodo() {
	var todoText = prompt('Enter a new TODO:');
	if (todoText !== null && todoText.trim() !== '') {
	var todoDiv = document.createElement('div');
	todoDiv.textContent = '- ' + todoText;
	todoDiv.classList.add('todo');

	var deleteBtn = document.createElement('span');
	deleteBtn.textContent = 'Delete';
	deleteBtn.classList.add('delete-btn');
	deleteBtn.onclick = function() {
		removeTodoConfirmation(todoDiv);
	};

	todoDiv.appendChild(deleteBtn);

	var todoList = document.getElementById('ft_list');
	todoList.insertBefore(todoDiv, todoList.firstChild);
	}
}

function removeTodoConfirmation(todoDiv) {
	if (confirm('Are you sure you want to remove this TODO?')) {
	var todoList = document.getElementById('ft_list');
	todoList.removeChild(todoDiv);
	}
}

function openNewTodoDialog() {
	createTodo();
}
