import { ToDoList, Todo } from "../../todo";


//hämtar element
const listEl = document.getElementById("list-container") as HTMLDivElement;
const taskInputEl = document.getElementById("taskInput") as HTMLInputElement;
const priorityInputEl = document.getElementById("priorityInput") as HTMLInputElement;
const formEl = document.getElementById("form") as HTMLFormElement;

const newToDo = new ToDoList();


function displayTodos(){
    //Rensar container 
    listEl.innerHTML = "";

    //hämtar tasks 
    const tasks = newToDo.getTodos();

    tasks.sort((a, b) => a.priority - b.priority);

    //loopar igenom varje tasks och skapar lista för varje
    tasks.forEach((todo, index) => {
        let todoheader = document.createElement("h3");
        let todoParaEl = document.createElement("p");

        let todoContainer = document.createElement("div");
        todoContainer.classList.add("taskcontainer");

        let btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        const completeBtn = document.createElement("button");
            completeBtn.innerText = "Markera som klar";
            completeBtn.setAttribute("data-index", index.toString());//sätter ett data-attribut för att ha koll på index
            
            //event vid klick på knappen avklarad uppgift
            completeBtn.addEventListener("click", (event) => {            
                const dataIndex = (event.target as HTMLButtonElement).getAttribute("data-index");
                if(dataIndex!== null) {
                    const index = parseInt(dataIndex,10);
                    newToDo.markToDoCompleted(index);
                    displayTodos(); //uppdaterar listan efter att ha markerat en uppgift som avklarad
                }

            });

            //skapa en knapp som man kan ta bort uppgifter med
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Ta bort";
            removeBtn.setAttribute("data-index", index.toString());

            //tar bort uppgift vid klick
            removeBtn.addEventListener("click", (event) => {
                const dataIndex = (event.target as HTMLButtonElement).getAttribute("data-index");
                if(dataIndex!== null) {
                    const index = parseInt(dataIndex, 10);
                    newToDo.removeTodo(index);
                    displayTodos();
                }
            });

        todoheader.textContent = `${todo.task}`;
        todoParaEl.textContent = `Prioritet: ${todo.priority}`;

        if(todo.completed) {
            todoContainer.style.backgroundColor = "#90EE90"
        }
        
        todoheader.addEventListener("click", () => {
            newToDo.markToDoCompleted(index);
            displayTodos();
        })

        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(removeBtn);
        todoContainer.appendChild(todoheader);
        todoContainer.appendChild(todoParaEl);
        todoContainer.appendChild(removeBtn);
        todoContainer.appendChild(btnDiv);
        todoContainer.appendChild(completeBtn);
        listEl.appendChild(todoContainer);
    })
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEl = taskInputEl.value.trim();
    const priorityEl = parseInt(priorityInputEl.value);

    if(inputEl && priorityEl >= 1 && priorityEl <= 3) {
        newToDo.addTodo(inputEl, priorityEl);

        newToDo.saveToLocalStorage();

        displayTodos();

        taskInputEl.value = "";
        priorityInputEl.value = "";
    } else {
        alert("Skriv in korrekt uppgift och prioritet");
    }
});

window.addEventListener('load', displayTodos);