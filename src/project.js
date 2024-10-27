export const myProjects = [];
export const projectIndex = [0];

export class project {
  static counter = 0;
  static index = 0;
  constructor(projectName) {
    this.name = projectName;
    this.taskHigh = [];
    this.taskMedium = [];
    this.taskLow = [];
    this.index = ++project.counter;
  }
}

export class task {
  constructor(taskName, taskText, taskDate, taskPriority) {
    this.name = taskName;
    this.text = taskText;
    this.date = taskDate;
    this.priority = taskPriority;
  }
}

let project1 = new project("my first project", 1);

myProjects.splice(myProjects.length, 0, project1);
myProjects.splice(myProjects.length, 0, new project("my second project", 2));
myProjects.splice(myProjects.length, 0, new project("my third project", 3));

project1.taskHigh.splice(
  project1.taskHigh.length,
  0,
  new task("my task", "blablabla")
);

export function addProjectArray() {
  myProjects.splice(
    myProjects.length,
    0,
    new project(document.getElementById("projectNameInput").value)
  );
}
