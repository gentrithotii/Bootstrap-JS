const todoListItems = [];

function dateFormat() {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
}
function addTodoToList(event) {
  event.preventDefault();

  const todoTitle = document.getElementById("todo-title").value;
  const todoDescription = document.getElementById("todo-description").value;
  const todoDueDate = document.getElementById("todo-due-date").value;
  const todoPerson = document.getElementById("assign-to-person").value;
  const todoFile = document.getElementById("todo-file").value;

  console.log(typeof todoDueDate);

  if (todoTitle !== "" || todoDescription !== "" || todoDueDate !== "") {
    const todoObject = {
      todoTitle: todoTitle,
      todoDescription: todoDescription,
      todoDueDate: todoDueDate,
      todoPerson: todoPerson,
      todoCreatedAt: dateFormat(),
      todoFile: todoFile,
    };

    todoListItems.push(todoObject);
  }

  displayTodoList();
  addDeleteListeners();
}

function displayTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todoListItems.forEach((todo, position) => {
    const html = `
    <div class="card-body border-top">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <h6 class="mb-1">${todo.todoTitle}</h6>
          <p class="mb-2 text-muted">${todo.todoDescription}</p>
          <div class="d-flex flex-wrap align-items-center gap-2">
            <small class="text-muted"><i class="bi bi-calendar"></i> Due: ${
              todo.todoDueDate
            }</small>
            <span class="badge bg-info text-white"><i class="bi bi-person-fill"></i> ${
              todo.todoPerson
            }</span>
            <span class="badge bg-dark">📎 ${todo.todoFile} attachment${
      todo.todoFile > 1 ? "s" : ""
    }</span>
          </div>
        </div>
        <div class="text-end">
          <small class="text-muted d-block mb-2">Created: ${
            todo.todoCreatedAt
          }</small>
          <div class="btn-group">
            <button class="btn btn-outline-success btn-sm"><i class="bi bi-check"></i></button>
            <button class="btn btn-outline-primary btn-sm"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-outline-danger btn-sm" data-index="${position}"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
    todoList.innerHTML += html;
  });
}

function addDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".btn-outline-danger");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.currentTarget.getAttribute("data-index");
      deleteItem(parseInt(index));
    });
  });
}

function deleteItem(position) {
  todoListItems.splice(position, 1);
  document.getElementById("todo-list").innerHTML = "";
  displayTodoList();
  addDeleteListeners();
}
