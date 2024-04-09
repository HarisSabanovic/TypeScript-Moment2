import { ToDoList, Todo } from "../../todo";


//hämtar element
const listEl = document.getElementById("list-container") as HTMLDivElement;
const taskInputEl = document.getElementById("taskinput") as HTMLInputElement;
const priorityInputEl = document.getElementById("priorityInput") as HTMLInputElement;
const formEl = document.getElementById("form") as HTMLFormElement;

const newToDo = new ToDoList();


function displayTodos(){
    //Rensar container 
    listEl.innerHTML = "";

    //hämtar tasks 
    const tasks = newToDo.getTodos();

    //loopar igenom varje tasks och skapar lista för varje
    tasks.forEach((todo, index) => {
        let todoItem = document.createElement("p");
        todoItem.textContent = `${todo.task} Prioritet: ${todo.priority}`;
        if(todo.completed) {
            todoItem.style.backgroundColor = "#90EE90"
        }
        
        todoItem.addEventListener("click", () => {
            newToDo.markToDoCompleted(index);
            displayTodos();
        })
        listEl.appendChild(todoItem)
    })
}