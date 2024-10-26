import { myProjects } from "./project";

export let projectButton = document
  .getElementById("btnCreateProject")
  .addEventListener("click", projectForm);

export function projectForm() {
  const projectBar = document.getElementById("projectsFormDiv");

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
}

export function showAllProjects(eachProject) {
  const projectsDiv = document.getElementById("projects");

  const projectDiv = document.createElement("div");
  projectsDiv.appendChild(projectDiv);

  const projectName = document.createElement("h4");
  projectName.textContent = eachProject.name;
  projectDiv.appendChild(projectName);
}
