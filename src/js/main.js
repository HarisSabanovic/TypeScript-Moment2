"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("../../todo");
//hämtar element
var listEl = document.getElementById("list-container");
var taskInputEl = document.getElementById("taskInput");
var priorityInputEl = document.getElementById("priorityInput");
var formEl = document.getElementById("form");
var newToDo = new todo_1.ToDoList();
function displayTodos() {
    //Rensar container 
    listEl.innerHTML = "";
    //hämtar tasks 
    var tasks = newToDo.getTodos();
    tasks.sort(function (a, b) { return a.priority - b.priority; });
    //loopar igenom varje tasks och skapar lista för varje
    tasks.forEach(function (todo, index) {
        var todoheader = document.createElement("h3");
        var todoParaEl = document.createElement("p");
        var todoContainer = document.createElement("div");
        todoContainer.classList.add("taskcontainer");
        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");
        var completeBtn = document.createElement("button");
        completeBtn.innerText = "Markera som klar";
        completeBtn.setAttribute("data-index", index.toString()); //sätter ett data-attribut för att ha koll på index
        //event vid klick på knappen avklarad uppgift
        completeBtn.addEventListener("click", function (event) {
            var dataIndex = event.target.getAttribute("data-index");
            if (dataIndex !== null) {
                var index_1 = parseInt(dataIndex, 10);
                newToDo.markToDoCompleted(index_1);
                displayTodos(); //uppdaterar listan efter att ha markerat en uppgift som avklarad
            }
        });
        //skapa en knapp som man kan ta bort uppgifter med
        var removeBtn = document.createElement("button");
        removeBtn.innerText = "Ta bort";
        removeBtn.setAttribute("data-index", index.toString());
        //even som tar bort uppgift vid klick på krysset
        removeBtn.addEventListener("click", function (event) {
            var dataIndex = event.target.getAttribute("data-index");
            if (dataIndex !== null) {
                var index_2 = parseInt(dataIndex, 10);
                newToDo.removeTodo(index_2);
                displayTodos();
            }
        });
        todoheader.textContent = "".concat(todo.task);
        todoParaEl.textContent = "Prioritet: ".concat(todo.priority);
        if (todo.completed) {
            todoContainer.style.backgroundColor = "#90EE90";
        }
        todoheader.addEventListener("click", function () {
            newToDo.markToDoCompleted(index);
            displayTodos();
        });
        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(removeBtn);
        todoContainer.appendChild(todoheader);
        todoContainer.appendChild(todoParaEl);
        todoContainer.appendChild(removeBtn);
        todoContainer.appendChild(btnDiv);
        todoContainer.appendChild(completeBtn);
        listEl.appendChild(todoContainer);
    });
}
formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputEl = taskInputEl.value.trim();
    var priorityEl = parseInt(priorityInputEl.value);
    if (inputEl && priorityEl >= 1 && priorityEl <= 3) {
        newToDo.addTodo(inputEl, priorityEl);
        newToDo.saveToLocalStorage();
        displayTodos();
        taskInputEl.value = "";
        priorityInputEl.value = "";
    }
    else {
        alert("Skriv in korrekt uppgift och prioritet");
    }
});
window.addEventListener('load', displayTodos);
