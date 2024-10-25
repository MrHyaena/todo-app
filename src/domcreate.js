const btnCreateProject = document.querySelector("#btnCreateProject");

export let btnSidebar = btnCreateProject.addEventListener(
  "click",
  taskCreateForm
);

function taskCreateForm() {
  const board = document.querySelector("#board");
  board.innerHTML = "";

  const formDiv = document.createElement("div");
  formDiv.setAttribute("id", "formDiv");
  board.appendChild(formDiv);

  const formTask = document.createElement("form");
  formDiv.appendChild(formTask);

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "inputName");
  formTask.appendChild(inputName);

  const inputText = document.createElement("textarea");
  inputText.setAttribute("id", "inputText");
  formTask.appendChild(inputText);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("id", "inputDate");
  formTask.appendChild(inputDate);

  const inputPriority = document.createElement("input");
  inputPriority.setAttribute("id", "inputPriority");
  formTask.appendChild(inputPriority);
}
