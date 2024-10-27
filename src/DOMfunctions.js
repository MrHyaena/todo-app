import { myProjects, task } from "./project";

import { addProjectArray } from "./project";

import { projectIndex } from "./project";

// Form for adding tasks //

document.getElementById("addTask").addEventListener("click", taskCreateForm);

function taskCreateForm() {
  const addConsole = document.querySelector("#addConsole");

  const formDiv = document.querySelector("#formDiv");
  formDiv.innerHTML = "";

  const formTask = document.createElement("form");
  formDiv.appendChild(formTask);

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "inputName");
  inputName.setAttribute("placeholder", "Task name");
  formTask.appendChild(inputName);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("id", "inputDate");
  formTask.appendChild(inputDate);

  const inputText = document.createElement("textarea");
  inputText.setAttribute("id", "inputText");
  inputText.setAttribute("placeholder", "Description");
  formTask.appendChild(inputText);

  const prioritySet = document.createElement("fieldset");
  formTask.appendChild(prioritySet);

  const legendRdaio = document.createElement("legend");
  legendRdaio.textContent = "Priority";
  prioritySet.appendChild(legendRdaio);

  for (let i = 1; i < 4; i++) {
    const priority = document.createElement("input");
    priority.setAttribute("id", "priority" + i);
    priority.setAttribute("name", "priority");
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

  buttonSend.addEventListener("click", () => {
    formDiv.innerHTML = "";
  });
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
    addProjectArray();
    projectBar.innerHTML = "";

    console.log(myProjects);

    showAllProjects();
  });
}

export function showAllProjects() {
  document.getElementById("projects").innerHTML = "";
  myProjects.map(domCreateProjects);

  function domCreateProjects(eachProject) {
    const projectsDiv = document.getElementById("projects");

    const projectDiv = document.createElement("div");
    projectsDiv.appendChild(projectDiv);

    const projectName = document.createElement("h4");
    projectName.textContent = eachProject.name;
    projectDiv.appendChild(projectName);

    const btnProjectDelete = document.createElement("button");
    btnProjectDelete.textContent = "Delete";
    projectDiv.appendChild(btnProjectDelete);

    const btnProjectShow = document.createElement("button");
    btnProjectShow.textContent = "Open";
    projectDiv.appendChild(btnProjectShow);

    btnProjectDelete.addEventListener("click", () => {
      myProjects.splice(myProjects.indexOf(eachProject), 1);
      projectsDiv.removeChild(projectDiv);
      console.log(myProjects);
    });

    btnProjectShow.addEventListener("click", () => {
      projectIndex.splice(0, 1, myProjects.indexOf(eachProject));

      console.log(projectIndex);

      eachProject.taskHigh.map(showHighPriority);
    });

    function showHighPriority(task) {
      const highPriority = document.querySelector("#highPriority");
      const taskName = document.createElement("h3");
      taskName.textContent = task.name;

      highPriority.appendChild(taskName);
    }
  }
}
