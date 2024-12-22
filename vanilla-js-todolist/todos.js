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
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todo;
  span.addEventListener("dblclick", () => {
    const idx = todos.indexOf(todo);

    todoslist.replaceChild(
      renderTodoInEditMode(todo),
      todoslist.childNodes[idx],
    );
  });
  li.append(span);

  const button = document.createElement("button");
  button.textContent = "Done";
  button.addEventListener("click", () => {
    const idx = todos.indexOf(todo);
    removeTodo(idx);
  });
  li.append(button);

  return li;
}

function renderTodoInEditMode(todo) {
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo;
  li.append(input);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    const idx = todos.indexOf(todo);
    updateTodo(idx, input.value);
  });
  li.append(saveBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    const idx = todos.indexOf(todo);
    todoslist.replaceChild(
      renderTodoInReadMode(todo),
      todoslist.childNodes[idx],
    );
  });
  li.append(cancelBtn);

  return li;
}

function updateTodo(index, description) {
  todos[index] = description;
  const todo = renderTodoInReadMode(description);
  todoslist.replaceChild(todo, todoslist.childNodes[index]);
}

function removeTodo(index) {
  todos.splice(index, 1);
  todoslist.childNodes[index].remove();
}

function addToDo() {
  const description = addTodoInput.value;

  todos.push(description);
  const todo = renderTodoInReadMode(description);
  todoslist.append(todo);

  addTodoInput.value = "";
  addToDoButton.disabled = true;
}
