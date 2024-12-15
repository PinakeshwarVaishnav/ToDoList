const todos = ["abc", "efg", "hij"];

const addTodoInput = document.getElementById("todo-input");
const addToDoButton = document.getElementById("add-todo-btn");
const todoslist = document.getElementById("todos-list");
const newLi = document.createElement("li");

for (const todo of todos) {
  todoslist.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener("input", () => {
  addToDoButton.disabled = addToDoButton.value.length < 3;
});

addTodoInput.addEventListener("keydown", ({ key }) => {
  if (key === "Enter" && addTodoInput.value.length >= 3) {
    addToDo();
  }
});

addToDoButton.addEventListener("click", () => {
  addToDo();
});

function renderTodoInReadMode(todo) {
  newLi.textContent = todo;
  todoslist.appendChild(newLi);
}

function addToDo() {
  const todoText = addTodoInput.value.trim();

  if (todoText.length < 3) {
    console.log("todo length must be more than 3 characters");
    return;
  }

  renderTodoInReadMode(todoText);

  addTodoInput.value = "";
}
