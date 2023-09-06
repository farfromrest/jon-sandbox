import "./style.css";

// Render initial todos
// const todos = ["Buy milk", "Buy eggs", "Buy bread", "Buy rice"];

const form = document.querySelector<HTMLFormElement>("#todo-form");

const list = document.querySelector("#todo-list");

form?.addEventListener("submit", function (event) {
  const form = event.currentTarget as HTMLFormElement;
  const inputValue = form.elements[0].value;

  event.preventDefault();

  const todo = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    todo.remove();
  });

  todo.innerText = inputValue;
  todo.appendChild(deleteButton);

  list?.appendChild(todo);

  form.reset();
});
