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

  const formHeading = document.createElement("h2");
  formHeading.textContent = "Create task";
  formTask.appendChild(formHeading);

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "inputName");
  formTask.appendChild(inputName);

  const inputText = document.createElement("textarea");
  inputText.setAttribute("id", "inputText");
  formTask.appendChild(inputText);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("id", "inputDate");
  formTask.appendChild(inputDate);

  const prioritySet = document.createElement("fieldset");
  formTask.appendChild(prioritySet);

  for (let i = 1; i < 4; i++) {
    const priority = document.createElement("input");
    priority.setAttribute("id", "priority" + i);
    priority.setAttribute("name", "priority" + i);
    priority.setAttribute("type", "radio");
    priority.setAttribute("value", i);
    prioritySet.appendChild(priority);

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority" + i);
    priorityLabel.setAttribute("id", "prioLabel" + i);
    prioritySet.appendChild(priorityLabel);
  }

  const buttonSend = document.createElement("button");
  buttonSend.textContent = "Add Task";
  buttonSend.setAttribute("id", "buttonSend");
  formTask.appendChild(buttonSend);

  document.getElementById("prioLabel1").textContent = "Low";
  document.getElementById("prioLabel2").textContent = "Medium";
  document.getElementById("prioLabel3").textContent = "High";
}
