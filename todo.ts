//Todo interface som definierar kontraktet för en att göra uppgift
interface Todo {
    task: string;
    completed: boolean;
    priority: number; //1 2 eller 3;
}

//klass som implementerar interface
class ToDoList implements Todo {

    task: string;
    completed: boolean;
    priority: number; //1 2 eller 3;

    todos: Todo[] = []; //en array av ToDo objekt

    constructor(task: string, completed: boolean, priority: number){
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }


    addTodo(task: string, priority: number): boolean {
        if(typeof task !== "string" || typeof priority !== "number" || priority < 1 || priority > 3) {
            return false;
        }

        //nytt todo objekt som läggs till i listan
        const newTask: Todo = {
            task: task,
            completed: false,
            priority: priority
        }

        this.todos.push(newTask);
        return true; //returnerar true ifall allt har matats in korrekt
    }

    //metod för att markera todo som klart
    markToDoCompleted(toDoIndex: number): void {
        if(toDoIndex >= 0 && toDoIndex < this.todos.length) {
            this.todos[toDoIndex].completed = true;
            this.saveToLocalStorage();
        }
    }

    //metod för att hämta listan av todos
    getTodos(): Todo[] {
        return this.todos;
    }

    saveToLocalStorage(): void {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    loadLocalStorage(): void {
        const storedToDos = localStorage.getItem("todos");

        if(storedToDos) {
            this.todos = JSON.parse(storedToDos);
        }
    }
}

