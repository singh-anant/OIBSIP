let textinput = document.getElementById("text-input");
let message = document.getElementById("message");
let form = document.getElementById("form");
let date = document.getElementById("date-input");
let textarea = document.getElementById("text-area");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textinput.value === "") {
    console.log("Fail");
    message.innerHTML = "Task cannot be blank";
  } else {
    console.log("Success");
    message.innerHTML = "";
    acceptdata();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    // IMP
    () => {
      add.setAttribute("data-bs-dismiss", "");
    };
  }
};

let data = {};
let acceptdata = () => {
  data["text"] = textinput.value;
  data["date"] = date.value;
  data["description"] = textarea.value;
  createTasks();
  // console.log(data);
};
//create task
let createTasks = () => {
  tasks.innerHTML += ` <div>
  <span style="font-weight: bold">${data.text}</span>
  <span class="date">${data.date}</span>
  <p>${data.description}</p>
  <span class="options">
    <i onClick="edittask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
    <i class="fas fa-trash-alt" onClick="deletetask(this)"></i>
  </span>
</div>`;

  resetForm();
};

let edittask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textinput.value = selectedTask.children[0].innerHTML;
  date.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  selectedTask.remove();
};

let deletetask = (e) => {
  e.parentElement.parentElement.remove();
};

let resetForm = () => {
  textarea.value = "";
  date.value = "";
  textinput.value = "";
};
