const todoList = []; 

reenderTodoList();

function reenderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, todoDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div  class="todo-date">${todoDate}</div>  
    <button onclick="todoList.splice(${index},1);
    reenderTodoList();" class="delete-button"
    >
      Delete
    </button>`;
    todoListHTML += html;
  });
  document.querySelector(".text-container").innerHTML = todoListHTML;
}


function add() {
  let inputElement = document.querySelector(".input-container");
  let name = inputElement.value;
  let inputDate = document.querySelector(".date-input");
  let todoDate = inputDate.value;
  todoList.push({
    name,
    todoDate,
  });
  inputElement.value = "";
  inputDate.value = "";
  reenderTodoList();
}
