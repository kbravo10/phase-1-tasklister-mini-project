document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const Formtask = document.getElementById("create-task-form");
  const descriptionTask = document.getElementById("new-task-description");
  const createNewTask = document.getElementById("Create New Task");
  const tasksToDo = document.getElementById("tasks")
  
  function displayList(){
    const span = document.createElement("span");
    const li = document.createElement("li");
    const dltButton = document.createElement("button");
 
    span.textContent = `${descriptionTask.value}`;
    dltButton.innerHTML = " remove "

    span.appendChild(dltButton);
    li.appendChild(span);
    tasksToDo.appendChild(li)
  }

  Formtask.addEventListener("submit", (e) => {
    e.preventDefault() 
    displayList()
    e.target.reset();
  })

  tasksToDo.addEventListener('click', (e) => {
    e.preventDefault()
    if(confirm("Are you sure?"))
      e.target.parentNode.parentNode.remove()
  })
}
)