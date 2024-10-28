export const myProjects = [];
export const projectIndex = [0];

export class project {
  static counter = 0;
  constructor(projectName) {
    this.name = projectName;
    this.taskHigh = [];
    this.taskMedium = [];
    this.taskLow = [];
    this.index = 0;
  }
}

export class task {
  constructor(taskName, taskDate, taskText, taskPriority) {
    this.name = taskName;
    this.text = taskText;
    this.date = taskDate;
    this.priority = taskPriority;
  }
}

export function addProjectArray() {
  myProjects.splice(
    myProjects.length,
    0,
    new project(document.getElementById("projectNameInput").value)
  );
}

export function addTaskToProject() {
  myProjects[projectIndex].taskHigh.splice(
    0,
    0,
    new task(
      document.getElementById("inputName").value,
      document.getElementById("inputDate").value,
      document.getElementById("inputText").value,
      document.querySelector("input[type='radio'][name=priority]:checked").value
    )
  );

  console.log(myProjects);
  console.log(myProjects[projectIndex]);
  console.log(
    document.querySelector("input[type='radio'][name=priority]:checked").value
  );
}

// Test data

let project1 = new project("my first project", 1);

myProjects.splice(myProjects.length, 0, project1);
myProjects.splice(myProjects.length, 0, new project("my second project", 2));
myProjects.splice(myProjects.length, 0, new project("my third project", 3));

project1.taskHigh.splice(
  project1.taskHigh.length,
  0,
  new task(
    "my task",

    "3.10.1999",
    "iufehwi uhfaiuewh uhuhiu e whauf hfuewhfaiu fewafu hfurhaiufhruhf",
    3
  )
);

console.log(myProjects);
console.log(projectIndex);

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
