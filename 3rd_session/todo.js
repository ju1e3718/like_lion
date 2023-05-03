const toDoForm = document.querySelector(".todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo_list");
const inputBtn = document.querySelector("#input_btn")

function printToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  span.innerHTML = toDo;
  delBtn.innerText = "X";
  checkBtn.innerText = "✔";
  li.append(checkBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  checkBtn.addEventListener("click", checkTodo);
  delBtn.addEventListener("click", deleteTodo);
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

function checkTodo(event) {
  // event.target.classList.toggle('checked');
  const checkOne = event.target.parentElement;
  checkOne.style.color = "#dddddd";
  
}


toDoForm.addEventListener("submit", addToDo);
inputBtn.addEventListener("click", addToDo)