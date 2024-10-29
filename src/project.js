export const myProjects = [];
export const projectIndex = [0];
export const taskIndex = [0];

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
  let priorityNumber = document.querySelector(
    "input[type='radio'][name=priority]:checked"
  ).value;

  if (priorityNumber == 3) {
    myProjects[projectIndex].taskHigh.splice(
      0,
      0,
      new task(
        document.getElementById("inputName").value,
        document.getElementById("inputDate").value,
        document.getElementById("inputText").value,
        document.querySelector(
          "input[type='radio'][name=priority]:checked"
        ).value
      )
    );
    console.log(myProjects[projectIndex].taskHigh);
  } else if (priorityNumber == 2) {
    myProjects[projectIndex].taskMedium.splice(
      0,
      0,
      new task(
        document.getElementById("inputName").value,
        document.getElementById("inputDate").value,
        document.getElementById("inputText").value,
        document.querySelector(
          "input[type='radio'][name=priority]:checked"
        ).value
      )
    );
  } else if (priorityNumber == 1) {
    myProjects[projectIndex].taskLow.splice(
      0,
      0,
      new task(
        document.getElementById("inputName").value,
        document.getElementById("inputDate").value,
        document.getElementById("inputText").value,
        document.querySelector(
          "input[type='radio'][name=priority]:checked"
        ).value
      )
    );
  }
  console.log(myProjects);
}

export function taskHighDone() {
  myProjects[projectIndex].taskHigh.splice(
    myProjects[projectIndex].taskHigh[taskIndex[0]],
    1
  );
}

export function taskMediumDone() {
  myProjects[projectIndex].taskMedium.splice(
    myProjects[projectIndex].taskHigh[taskIndex[0]],
    1
  );
}

export function taskLowDone() {
  myProjects[projectIndex].taskLow.splice(
    myProjects[projectIndex].taskHigh[taskIndex[0]],
    1
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
    "high",

    "3.10.1999",
    "iufehwi uhfaiuewh uhuhiu e whauf hfuewhfaiu fewafu hfurhaiufhruhf",
    3
  )
);

project1.taskMedium.splice(
  project1.taskMedium.length,
  0,
  new task(
    "medium",

    "3.10.1999",
    "iufehwi uhfaiuewh uhuhiu e whauf hfuewhfaiu fewafu hfurhaiufhruhf",
    3
  )
);

project1.taskLow.splice(
  project1.taskLow.length,
  0,
  new task(
    "low",

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
