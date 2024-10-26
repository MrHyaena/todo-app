import "./styles.css";
import { myProjects } from "./project";
import { projectButton } from "./domSidebar";
import { projectForm } from "./domSidebar";
import { showAllProjects } from "./domSidebar";

myProjects.map(showAllProjects);
console.log(myProjects);
