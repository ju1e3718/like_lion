const toDoForm = document.querySelector(".todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo_list");
const inputBtn = document.querySelector("#input_btn")

function printToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerHTML = toDo;
  button.innerText = "X";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
  // span.addEventListener("dblclick", doneTodo);
}

function addToDo(event) {
  event.preventDefault();
  printToDo(toDoInput.value);
  toDoInput.value = "";
}

function deleteTodo(event) {
  const removingOne = event.target.parentElement;
  removingOne.remove();
}

toDoForm.addEventListener("submit", addToDo);
inputBtn.addEventListener("click", addToDo)