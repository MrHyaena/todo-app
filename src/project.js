export const myProjects = [];

export class project {
  static numberForIndex = 0;
  constructor(projectName) {
    this.name = projectName;
    this.tasks = [];
    this.projectIndex = "";
  }
}

myProjects.splice(0, 0, new project("my first project"));
myProjects.splice(0, 0, new project("my second project"));
myProjects.splice(0, 0, new project("my third project"));

export function addProjectArray() {
  myProjects.splice(
    0,
    0,
    new project(document.getElementById("projectNameInput").value)
  );
}
