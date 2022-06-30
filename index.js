const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');


let tasks = [];
function Task(description) {
	this.description = description;
}

addTaskBtn.addEventListener('click', () => {
	tasks.push(new Task(deskTaskInput.value));
	fillHtmlList();
	deskTaskInput.value = '';
});


const createTemplate = (task, index) => {
	return ` <div class="todo-item">
				<div class="description">${task.description}</div>
				<div class="buttons">
					<button onclick='deleteTask(${index})' class="btn-delete">ddelete</button>
				</div>
			</div>`
}


const fillHtmlList = () => {
	todosWrapper.innerHTML = "";
	if (tasks.length > 0) {
		tasks.forEach((item, index) => {
			todosWrapper.innerHTML += createTemplate(item, index);
		})
	}
}
const deleteTask = (index) => {
	tasks.splice(index, 1);
	fillHtmlList();
}


