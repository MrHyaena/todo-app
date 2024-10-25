import "./styles.css";
import { btnSidebar } from "./domcreate";

export const myProjects = [];

class project {
  static numberForIndex = 0;
  constructor(projectName) {
    this.name = projectName;
    this.tasks = [];
  }
}

btnSidebar;

myProjects.splice(0, 0, new project("my first project"));
myProjects.splice(0, 0, new project("my second project"));

console.log(myProjects);
