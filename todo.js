"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
//klass som implementerar interface
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todos = []; //en array av ToDo objekt
        this.loadLocalStorage();
    }
    ToDoList.prototype.addTodo = function (task, priority) {
        if (typeof task !== "string" || typeof priority !== "number" || priority < 1 || priority > 3) {
            return false;
        }
        //nytt todo objekt som läggs till i listan
        var newTask = {
            task: task,
            completed: false,
            priority: priority
        };
        this.todos.push(newTask);
        this.saveToLocalStorage;
        return true; //returnerar true ifall allt har matats in korrekt
    };
    //metod för att markera todo som klart
    ToDoList.prototype.markToDoCompleted = function (toDoIndex) {
        if (toDoIndex >= 0 && toDoIndex < this.todos.length) {
            this.todos[toDoIndex].completed = true;
            this.saveToLocalStorage();
        }
    };
    //metod för att hämta listan av todos
    ToDoList.prototype.getTodos = function () {
        return this.todos;
    };
    ToDoList.prototype.removeTodo = function (index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
            this.saveToLocalStorage();
        }
    };
    ToDoList.prototype.saveToLocalStorage = function () {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };
    ToDoList.prototype.loadLocalStorage = function () {
        var storedToDos = localStorage.getItem("todos");
        if (storedToDos) {
            this.todos = JSON.parse(storedToDos);
        }
    };
    return ToDoList;
}());
exports.ToDoList = ToDoList;
