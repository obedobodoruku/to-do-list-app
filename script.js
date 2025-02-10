const body = document.getElementById("myBody")
const newTaskBtn = document.getElementById("myButton");
const clearBtn = document.getElementById("clearBtn");
const cancel = document.getElementById("cancelBtn");
const addTaskBtn = document.getElementById("addBtn");
const taskPage = document.getElementById("taskPage");
const taskInput = document.getElementById("taskInput");
const taskDescription = document.getElementById("description");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");
const complete = document.getElementById("completedTask");


const taskListDisplay = () => {
    const oneTask = taskInput.value;
    const twoTask = taskDescription.value;
    const dateTask = taskDate.value;

    if (oneTask) {
        const li = document.createElement("li");


        li.innerHTML = ` 
        <label>
          <input type="checkbox">
          <span>${oneTask}</span>
          <button class="delete-btn">Delete</button>
        </label>
        <p>${twoTask}</p>
        <p>${dateTask}</p>
        <hr>
        `;
        
        const deleteBtn = li.querySelector('.delete-btn');

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        
        });

        taskList.appendChild(li);

        taskInput.value = "";
        taskDescription.value = "";
        taskDate.value = "";
        
    } 
 

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
           addTaskBtn.click();
        }
       })

    addTaskBtn.textContent = "Add Task"
    taskPage.classList.add('task');
   taskList.classList.remove('hidden');
};




addTaskBtn.addEventListener("click", taskListDisplay);

taskList.addEventListener("dblclick", () => {
    taskPage.classList.remove('task');
    taskList.classList.add('hidden');

    taskInput.addEventListener("keypress", (e) => {

     if (e.key === 'Enter') {
        addTaskBtn.click();
     }
    })
   
});


newTaskBtn.addEventListener("click", () => {
    taskPage.classList.remove('task');
    taskList.classList.add('hidden');
    addTaskBtn.textContent = "Add Task";
});

clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    taskList.classList.add('hidden');
});

cancel.addEventListener("click", () => {
    taskPage.classList.add('task');
    taskList.classList.remove('hidden');

});
