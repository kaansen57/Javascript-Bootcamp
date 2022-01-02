//element select
const taskList = document.querySelector("#task-list .card-body");
const newTask = document.querySelector("#new-task-wrapper");
const insertTask = document.querySelector("#insert-task");
const deleteAllTask = document.querySelector("#delete-all-task");
//ul create
const createUl = document.createElement("ul");
createUl.classList.add("list-group");
createUl.classList.add("p-3");
taskList.appendChild(createUl);
//variables
let taskItem; //task arraylist

created();

insertTask.addEventListener("click", () => {
  //insert task
  let inputText = document.querySelector("#new-task").value;
  if (inputText.length > 0) {
    createUl.innerHTML += taskLiTemplate(inputText);
    taskSetLS(inputText);
  }
  // const li = document.createElement("li");
  // li.classList.add("list-group-item");
  // li.textContent = inputText;
  // ul.appendChild(li);
});

//delete all task
deleteAllTask.addEventListener("click", () => {
  if (taskItem.length > 0) {
    const tasks = document.querySelectorAll(".task");
    if (confirm("Are you sure ?")) {
      tasks.forEach((x) => {
        createUl.removeChild(x);
      });
      taskItem = [];
      localStorage.clear();
    }
  } else {
    alert("Task list empty")
  }
});

//delete task
createUl.addEventListener("click", (e) => {
  if (e.target.className === "float-end btn-close") {
    console.log();
    let deleteTask = e.target.parentElement.innerText;
    let taskIndexPosition = taskItem.indexOf(deleteTask);
    
    if (confirm("Are you sure ?")) {
      taskItem.splice(taskIndexPosition, 1);
      localStorage.setItem("taskList", JSON.stringify(taskItem));
      e.target.parentElement.remove();
    }
    e.preventDefault();
  }
});

//functions

function created() {
  //page load
  loadTask();
}

function taskLiTemplate(task) {
  // ul li template
  const li = `<li style="border-top-width:1px;" 
        class="list-group-item mb-2 mt-2 border-success task"
        ">
        ${task} 
       <a href="#" class="float-end btn-close"></a>
        </li>`;

  return li;
}

function loadTask() {
  //local storage data get when page load.
  taskItem = JSON.parse(localStorage.getItem("taskList"));
  if (taskItem !== null) {
    taskItem.forEach((x) => {
      createUl.innerHTML += taskLiTemplate(x);
    });
  } else {
    taskItem = [];
  }
}

function taskSetLS(task) {
  //Localstorage and taskItem array set item
  taskItem.push(task);
  localStorage.setItem("taskList", JSON.stringify(taskItem));
}
