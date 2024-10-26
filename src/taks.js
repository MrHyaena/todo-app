export function addTaskToProject() {
  inputName = document.getElementById("inputName");
  inputText = document.getElementById("inputText");
  inputDate = document.getElementById("inputDate");
  for (let i = 1; i < 4; i++) {
    if (document.getElementById("priority" + i).checked) {
      inputPriority = document.getElementById("priority" + i).value;
    }
  }

  console.log(inputText);
}
