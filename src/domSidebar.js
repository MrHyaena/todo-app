import { myProjects } from ".";

export let domSidebar = myProjects.map(domProjectsCreate);

function domProjectsCreate(project) {
  console.log(project.name);
}
