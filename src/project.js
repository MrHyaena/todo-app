export const myProjects = [];

class project {
  static numberForIndex = 0;
  constructor(projectName) {
    this.name = projectName;
    this.tasks = [];
  }
}

myProjects.splice(0, 0, new project("my first project"));
myProjects.splice(0, 0, new project("my second project"));
myProjects.splice(0, 0, new project("my third project"));
