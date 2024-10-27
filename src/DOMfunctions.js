import { myProjects } from "./project";
import { project } from "./project";

// Form for adding tasks //

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
  buttonSend.setAttribute("type", "button");
  formTask.appendChild(buttonSend);

  document.getElementById("prioLabel1").textContent = "Low";
  document.getElementById("prioLabel2").textContent = "Medium";
  document.getElementById("prioLabel3").textContent = "High";
}

// DOM creation of sidebar elements //

// Button - create new projects //

document
  .getElementById("btnCreateProject")
  .addEventListener("click", projectForm);

export function projectForm() {
  const projectBar = document.getElementById("projectsFormDiv");
  projectBar.innerHTML = "";

  const formProject = document.createElement("form");
  formProject.setAttribute("id", "formProject");
  projectBar.appendChild(formProject);

  const formProjectHeading = document.createElement("h3");
  formProjectHeading.textContent = "Create project";
  formProject.appendChild(formProjectHeading);

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("id", "projectNameInput");
  formProject.appendChild(projectNameInput);

  const buttonNewProject = document.createElement("button");
  buttonNewProject.textContent = "Create";
  buttonNewProject.setAttribute("id", "buttonNewProject");
  buttonNewProject.setAttribute("type", "button");
  formProject.appendChild(buttonNewProject);

  buttonNewProject.addEventListener("click", () => {
    myProjects.splice(0, 0, new project(projectNameInput.value));
    projectBar.innerHTML = "";

    console.log(myProjects);

    myProjects.map(showAllProjects);
  });
}

function showAllProjects(eachProject) {
  const projectsDiv = document.getElementById("projects");
  projectsDiv.innerHTML = "";

  const projectDiv = document.createElement("div");
  projectsDiv.appendChild(projectDiv);

  const projectName = document.createElement("h4");
  projectName.textContent = eachProject.name;
  projectDiv.appendChild(projectName);

  const btnProjectDelete = document.createElement("button");
  btnProjectDelete.textContent = "Delete";
  projectDiv.appendChild(btnProjectDelete);
}
