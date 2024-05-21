Object.defineProperty({},"__esModule",{value:!0});var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.ToDoList=void 0;var e=function(){function t(){this.todos=[],this.loadLocalStorage()}return t.prototype.addTodo=function(t,e){return"string"==typeof t&&"number"==typeof e&&!(e<1)&&!(e>3)&&(this.todos.push({task:t,completed:!1,priority:e}),this.saveToLocalStorage,!0)},t.prototype.markToDoCompleted=function(t){t>=0&&t<this.todos.length&&(this.todos[t].completed=!0,this.saveToLocalStorage())},t.prototype.getTodos=function(){return this.todos},t.prototype.removeTodo=function(t){t>=0&&t<this.todos.length&&(this.todos.splice(t,1),this.saveToLocalStorage())},t.prototype.saveToLocalStorage=function(){localStorage.setItem("todos",JSON.stringify(this.todos))},t.prototype.loadLocalStorage=function(){var t=localStorage.getItem("todos");t&&(this.todos=JSON.parse(t))},t}();t.ToDoList=e;var o=document.getElementById("list-container"),n=document.getElementById("taskInput"),r=document.getElementById("priorityInput"),a=document.getElementById("form"),i=new t.ToDoList;function d(){o.innerHTML="";var t=i.getTodos();t.sort(function(t,e){return t.priority-e.priority}),t.forEach(function(t,e){var n=document.createElement("h3"),r=document.createElement("p"),a=document.createElement("div");a.classList.add("taskcontainer");var s=document.createElement("div");s.classList.add("btnDiv");var l=document.createElement("button");l.innerText="Markera som klar",l.setAttribute("data-index",e.toString()),l.addEventListener("click",function(t){var e=t.target.getAttribute("data-index");if(null!==e){var o=parseInt(e,10);i.markToDoCompleted(o),d()}});var c=document.createElement("button");c.innerText="Ta bort",c.setAttribute("data-index",e.toString()),c.addEventListener("click",function(t){var e=t.target.getAttribute("data-index");if(null!==e){var o=parseInt(e,10);i.removeTodo(o),d()}}),n.textContent="".concat(t.task),r.textContent="Prioritet: ".concat(t.priority),t.completed&&(a.style.backgroundColor="#90EE90"),n.addEventListener("click",function(){i.markToDoCompleted(e),d()}),s.appendChild(l),s.appendChild(c),a.appendChild(n),a.appendChild(r),a.appendChild(c),a.appendChild(s),a.appendChild(l),o.appendChild(a)})}a.addEventListener("submit",function(t){t.preventDefault();var e=n.value.trim(),o=parseInt(r.value);e&&o>=1&&o<=3?(i.addTodo(e,o),i.saveToLocalStorage(),d(),n.value="",r.value=""):alert("Skriv in korrekt uppgift och prioritet")}),window.addEventListener("load",d);
//# sourceMappingURL=index.e5fa8bad.js.map
