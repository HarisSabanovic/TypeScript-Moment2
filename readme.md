# Moment 2 - TypeScript 💻
Denna applikation tillåter användaren att skapa, hantera och markera uppgifter som klara genom ett TypeScript gränssnitt. Uppgifterna kan prioriteras och sparas mellan sessioner med hjälp av LocalStorage.

### Interface
Först skapades ett TypeScript-interface för att definiera kontraktet för en att göra-uppgift. Interface innehöll detta:

``` typescript
export interface Todo {
    task: string;
    completed: boolean;
    priority: number; //1 2 eller 3;
}
 ```

### TodoList-klass
Det skapades även en TypeScript-klass, "TodoList" som använder sig av interfacet. Klassen ser ut såhär:

``` typescript
export class ToDoList implements Todo {

    task: string;
    completed: boolean;
    priority: number; //1 2 eller 3;

    todos: Todo[] = []; //en array av ToDo objekt


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
        this.saveToLocalStorage
        return true; //returnerar true ifall allt har matats in korrekt
    }

    constructor(){
        this.loadLocalStorage();
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

    removeTodo(index:number): void {
        if (index>= 0 && index<this.todos.length) {
            this.todos.splice(index, 1);
            this.saveToLocalStorage();
        }
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
 ```

### Funktioner
På webbplatsen finns ett formulär där användaren kan fylla i nya uppgifter och deras prioritet. När de har fyllt i och skickat formuläret läggs uppgiften till i en lista nedanför.
Den nedre delen av sidan visar en lista över de uppgifter som användaren har skrivit in och sparat i formuläret. Varje uppgift har en knapp bredvid sig som de kan klicka på för att markera den som klar. Dessa upgifter sparas då ockå i LocalStorage

## Av Haris Sabanovic