//Todo interface som definierar kontraktet för en att göra uppgift
interface Todo {
    task: string;
    completed: boolean;
    priority: number; //1 2 eller 3;
}

//klass som implementerar interface
class ToDoList implements Todo {
    todos: Todo[] = []; //en array av ToDo objekt

    
}