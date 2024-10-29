import { myProjects, project } from "./project";

import { addProjectArray } from "./project";

import { projectIndex } from "./project";

import { addTaskToProject } from "./project";

import { taskIndex } from "./project";

import { taskHighDone } from "./project";

import { taskMediumDone } from "./project";

import { taskLowDone } from "./project";

// Header for projects, General Page

document.getElementById("projectNameheader").textContent = "General";
generalMap();

// Form for adding tasks //

document.getElementById("addTask").addEventListener("click", taskCreateForm);

export function taskCreateForm() {
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
    addTaskToProject();
    formDiv.innerHTML = "";
    clearTaskBoard();
    myProjects[projectIndex].taskHigh.map(showHighPriority);
    myProjects[projectIndex].taskMedium.map(showMediumPriority);
    myProjects[projectIndex].taskLow.map(showLowPriority);
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
      clearTaskBoard();
      console.log(myProjects);
    });

    btnProjectShow.addEventListener("click", () => {
      projectIndex.splice(0, 1, myProjects.indexOf(eachProject));

      document.getElementById("projectNameheader").textContent =
        eachProject.name;
      clearTaskBoard();
      eachProject.taskHigh.map(showHighPriority);
      eachProject.taskMedium.map(showMediumPriority);
      eachProject.taskLow.map(showLowPriority);
    });
  }
}

// General functions for showing tasks and clearing them

function showHighPriority(task) {
  const highPriority = document.querySelector("#highPriority");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  highPriority.appendChild(taskDiv);

  const taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskDiv.appendChild(taskName);

  const taskDate = document.createElement("h3");
  taskDate.textContent = "Due date - " + task.date;
  taskDiv.appendChild(taskDate);

  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.setAttribute("class", "taskButtonDiv");
  taskDiv.appendChild(taskButtonDiv);

  const btnDone = document.createElement("button");
  btnDone.setAttribute("class", "btnDone");
  btnDone.textContent = "Done";
  taskButtonDiv.appendChild(btnDone);

  const btnMore = document.createElement("button");
  btnMore.setAttribute("class", "btnDetails");
  btnMore.textContent = "Details";
  taskButtonDiv.appendChild(btnMore);

  const taskText = document.createElement("p");
  taskText.textContent = task.text;

  const taskTextLabel = document.createElement("h5");
  taskTextLabel.textContent = "Details";

  let openclosed = 0;

  btnMore.addEventListener("click", () => {
    if (openclosed == 0) {
      taskDiv.appendChild(taskTextLabel);
      taskDiv.appendChild(taskText);

      openclosed = 1;
    } else {
      taskDiv.removeChild(taskTextLabel);
      taskDiv.removeChild(taskText);

      openclosed = 0;
    }
  });

  btnDone.addEventListener("click", () => {
    taskIndex.splice(0, 1, myProjects[projectIndex].taskHigh.indexOf(task));
    taskHighDone();
    clearTaskBoard();
    myProjects[projectIndex].taskHigh.map(showHighPriority);
    myProjects[projectIndex].taskMedium.map(showMediumPriority);
    myProjects[projectIndex].taskLow.map(showLowPriority);
  });
}

function showMediumPriority(task) {
  const mediumPriority = document.querySelector("#mediumPriority");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  mediumPriority.appendChild(taskDiv);

  const taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskDiv.appendChild(taskName);

  const taskDate = document.createElement("h3");
  taskDate.textContent = "Due date - " + task.date;
  taskDiv.appendChild(taskDate);

  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.setAttribute("class", "taskButtonDiv");
  taskDiv.appendChild(taskButtonDiv);

  const btnDone = document.createElement("button");
  btnDone.setAttribute("class", "btnDone");
  btnDone.textContent = "Done";
  taskButtonDiv.appendChild(btnDone);

  const btnMore = document.createElement("button");
  btnMore.setAttribute("class", "btnDetails");
  btnMore.textContent = "Details";
  taskButtonDiv.appendChild(btnMore);

  const taskText = document.createElement("p");
  taskText.textContent = task.text;

  const taskTextLabel = document.createElement("h5");
  taskTextLabel.textContent = "Details";

  let openclosed = 0;

  btnMore.addEventListener("click", () => {
    if (openclosed == 0) {
      taskDiv.appendChild(taskTextLabel);
      taskDiv.appendChild(taskText);

      openclosed = 1;
    } else {
      taskDiv.removeChild(taskTextLabel);
      taskDiv.removeChild(taskText);

      openclosed = 0;
    }
  });

  btnDone.addEventListener("click", () => {
    taskIndex.splice(0, 1, myProjects[projectIndex].taskMedium.indexOf(task));

    taskMediumDone();
    clearTaskBoard();
    myProjects[projectIndex].taskHigh.map(showHighPriority);
    myProjects[projectIndex].taskMedium.map(showMediumPriority);
    myProjects[projectIndex].taskLow.map(showLowPriority);
  });
}

function showLowPriority(task) {
  const lowPriority = document.querySelector("#lowPriority");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  lowPriority.appendChild(taskDiv);

  const taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskDiv.appendChild(taskName);

  const taskDate = document.createElement("h3");
  taskDate.textContent = "Due date - " + task.date;
  taskDiv.appendChild(taskDate);

  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.setAttribute("class", "taskButtonDiv");
  taskDiv.appendChild(taskButtonDiv);

  const btnDone = document.createElement("button");
  btnDone.setAttribute("class", "btnDone");
  btnDone.textContent = "Done";
  taskButtonDiv.appendChild(btnDone);

  const btnMore = document.createElement("button");
  btnMore.setAttribute("class", "btnDetails");
  btnMore.textContent = "Details";
  taskButtonDiv.appendChild(btnMore);

  const taskText = document.createElement("p");
  taskText.textContent = task.text;

  const taskTextLabel = document.createElement("h5");
  taskTextLabel.textContent = "Details";

  let openclosed = 0;

  btnMore.addEventListener("click", () => {
    if (openclosed == 0) {
      taskDiv.appendChild(taskTextLabel);
      taskDiv.appendChild(taskText);

      openclosed = 1;
    } else {
      taskDiv.removeChild(taskTextLabel);
      taskDiv.removeChild(taskText);

      openclosed = 0;
    }
  });

  btnDone.addEventListener("click", () => {
    taskIndex.splice(0, 1, myProjects[projectIndex].taskLow.indexOf(task));
    taskLowDone();
    clearTaskBoard();
    myProjects[projectIndex].taskHigh.map(showHighPriority);
    myProjects[projectIndex].taskMedium.map(showMediumPriority);
    myProjects[projectIndex].taskLow.map(showLowPriority);
  });
}

function clearTaskBoard() {
  document.getElementById("highPriority").innerHTML = "";
  document.getElementById("mediumPriority").innerHTML = "";
  document.getElementById("lowPriority").innerHTML = "";
}

// General board creation

function generalMap() {
  document.getElementById("projectNameheader").textContent = "General";
  clearTaskBoard();
  myProjects.map(generalMapProjects);
}

function generalMapProjects(projectGen) {
  projectGen.taskHigh.map(showHighPriorityGen);
  projectGen.taskMedium.map(showMediumPriorityGen);
  projectGen.taskLow.map(showLowPriorityGen);
}

document.getElementById("allTasks").addEventListener("click", generalMap);

function showHighPriorityGen(task) {
  const highPriority = document.querySelector("#highPriority");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  highPriority.appendChild(taskDiv);

  const taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskDiv.appendChild(taskName);

  const taskDate = document.createElement("h3");
  taskDate.textContent = "Due date - " + task.date;
  taskDiv.appendChild(taskDate);

  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.setAttribute("class", "taskButtonDiv");
  taskDiv.appendChild(taskButtonDiv);

  const btnMore = document.createElement("button");
  btnMore.setAttribute("class", "btnDetails");
  btnMore.textContent = "Details";
  taskButtonDiv.appendChild(btnMore);

  const taskText = document.createElement("p");
  taskText.textContent = task.text;

  const taskTextLabel = document.createElement("h5");
  taskTextLabel.textContent = "Details";

  let openclosed = 0;

  btnMore.addEventListener("click", () => {
    if (openclosed == 0) {
      taskDiv.appendChild(taskTextLabel);
      taskDiv.appendChild(taskText);

      openclosed = 1;
    } else {
      taskDiv.removeChild(taskTextLabel);
      taskDiv.removeChild(taskText);

      openclosed = 0;
    }
  });
}

function showMediumPriorityGen(task) {
  const mediumPriority = document.querySelector("#mediumPriority");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  mediumPriority.appendChild(taskDiv);

  const taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskDiv.appendChild(taskName);

  const taskDate = document.createElement("h3");
  taskDate.textContent = "Due date - " + task.date;
  taskDiv.appendChild(taskDate);

  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.setAttribute("class", "taskButtonDiv");
  taskDiv.appendChild(taskButtonDiv);

  const btnMore = document.createElement("button");
  btnMore.setAttribute("class", "btnDetails");
  btnMore.textContent = "Details";
  taskButtonDiv.appendChild(btnMore);

  const taskText = document.createElement("p");
  taskText.textContent = task.text;

  const taskTextLabel = document.createElement("h5");
  taskTextLabel.textContent = "Details";

  let openclosed = 0;

  btnMore.addEventListener("click", () => {
    if (openclosed == 0) {
      taskDiv.appendChild(taskTextLabel);
      taskDiv.appendChild(taskText);

      openclosed = 1;
    } else {
      taskDiv.removeChild(taskTextLabel);
      taskDiv.removeChild(taskText);

      openclosed = 0;
    }
  });
}

function showLowPriorityGen(task) {
  const lowPriority = document.querySelector("#lowPriority");

  const taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "taskDiv");
  lowPriority.appendChild(taskDiv);

  const taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskDiv.appendChild(taskName);

  const taskDate = document.createElement("h3");
  taskDate.textContent = "Due date - " + task.date;
  taskDiv.appendChild(taskDate);

  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.setAttribute("class", "taskButtonDiv");
  taskDiv.appendChild(taskButtonDiv);

  const btnMore = document.createElement("button");
  btnMore.setAttribute("class", "btnDetails");
  btnMore.textContent = "Details";
  taskButtonDiv.appendChild(btnMore);

  const taskText = document.createElement("p");
  taskText.textContent = task.text;

  const taskTextLabel = document.createElement("h5");
  taskTextLabel.textContent = "Details";

  let openclosed = 0;

  btnMore.addEventListener("click", () => {
    if (openclosed == 0) {
      taskDiv.appendChild(taskTextLabel);
      taskDiv.appendChild(taskText);

      openclosed = 1;
    } else {
      taskDiv.removeChild(taskTextLabel);
      taskDiv.removeChild(taskText);

      openclosed = 0;
    }
  });
}
