import "./style.css";

// Render initial todos
const todos = ["Buy milk", "Buy eggs", "Buy bread", "Buy rice"];

const form = document.querySelector<HTMLFormElement>("#todo-form");

const list = document.querySelector("#todo-list");

function render() {
  // @ts-ignore
  list.innerHTML = "";
  todos.forEach((todo, i) => renderTodo(todo, i));
}

function createTodo(todo: string) {
  todos.push(todo);
  render();
}

function renderTodo(todo: string, i: number) {
  const item = document.createElement("li");
  item.innerText = todo;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    todos.splice(i, 1);
    render();
  });

  item.appendChild(deleteButton);

  list?.appendChild(item);
}

form?.addEventListener("submit", function (event) {
  const form = event.currentTarget as HTMLFormElement;
  // @ts-ignore
  const inputValue = form.elements[0].value;

  event.preventDefault();

  createTodo(inputValue);

  form.reset();
});

render();
