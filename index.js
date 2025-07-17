const todoList = [];

function addTodoToList(event) {
  event.preventDefault();
  console.log("todoTitle");
  const todoTitle = document.getElementById("todo-title").value;
  const todoDescription = document.getElementById("todo-description").value;
  const todoDueDate = document.getElementById("todo-due-date").value;
  const todoPerson = document.getElementById("assign-to-person").value;
  const todoFile = document.getElementById("todo-file").value;

  const todoObject = {
    todoTitle: todoTitle,
    todoDescription: todoDescription,
    todoDueDate: todoDueDate,
    todoPerson: todoPerson,
    todoFile: todoFile,
  };

  todoList.push(todoObject);

  console.log(todoList);
}
