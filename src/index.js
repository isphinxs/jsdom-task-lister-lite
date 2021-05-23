
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // console.log("Loaded!");
  const taskForm = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");
  
  taskForm.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event){
    event.preventDefault();
    // console.log("this is using addEventListener")
    // console.log('the event is:', event)
    // console.log('the event type is:', event.type)
    // console.log('the event target is:', event.target)
    console.log('the event value is:', event.value);
    const newTask = document.getElementById("new-task-description").value;
    tasks.innerHTML += `
      <li>
        ${newTask}
        <button data-description=${newTask}>done</button>
      </li>
    `
    taskForm.reset();
  }
});
