// Selectors
const todoName = document.querySelector(".todo-name");
const todoDate = document.querySelector(".todo-date");
const todoAmount = document.querySelector(".todo-amount");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-table");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);

// Functions
function addTodo(event) {
  if (validateName() && validateDate() && validateAmount()) {
    // Prevent form from submitting
    event.preventDefault();

    //DOM work start
    // Removing existing row
    const targetBody = document.getElementsByTagName("tbody")[0];
    const oldRow = targetBody.getElementsByTagName("tr")[1];
    if (oldRow && oldRow.getAttribute("id") == "default-tr") {
      oldRow.remove();
    }

    //Creating new objects
    const todoRow = document.createElement("tr");
    const todoData1 = document.createElement("td");
    const todoData2 = document.createElement("td");
    const todoData3 = document.createElement("td");
    const todoData4 = document.createElement("td");
    const todoX = document.createElement("button");

    todoRow.appendChild(todoData1);

    todoRow.appendChild(todoData1);
    todoRow.appendChild(todoData2);
    todoRow.appendChild(todoData3);
    todoRow.appendChild(todoData4);
    todoData4.setAttribute("align", "center");
    todoData4.appendChild(todoX);
    todoX.classList.add("remove-butt", "btn", "btn-sm", "btn-outline-danger");
    todoX.innerHTML = "\u2715";

    targetBody.appendChild(todoRow);
    //DOM work end
    
    // Selecting TDs
    const tdName = todoRow.getElementsByTagName("td")[0];
    const tdDate = todoRow.getElementsByTagName("td")[1];
    const tdAmount = todoRow.getElementsByTagName("td")[2];

    // Grabbing & appending inputs
    tdName.innerText = todoName.value;
    todoName.value = "";
    tdDate.innerText = todoDate.value;
    todoDate.value = "";
    tdAmount.innerText = todoAmount.value + " $";
    todoAmount.value = "";
  }
}

function deleteItem(e) {
  const item = e.target;
  // Delete item
  if (item.classList[0] === "remove-butt") {
    const todoItem = item.parentElement.parentElement;
    todoItem.remove();
  }
}

// Text fields validation
function validateName() {
  var regCheck = /^(?![0-9 ]*$)[ a-zA-Z0-9]{2,30}$/;
  var itemName = todoName.value;
  if (!regCheck.test(itemName)) {
    alert("Please enter the name of the place in which you've made the spend.");
    todoName.focus();
    return false;
  } else {
    return true;
  }
}

// Date validation
function validateDate() {
  var regCheck =
    /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
  var itemDate = todoDate.value;
  if (!regCheck.test(itemDate)) {
    alert("Please select or enter the date you've made the spend.");
    todoDate.focus();
    return false;
  } else {
    return true;
  }
}

// Amount validation
function validateAmount() {
  var regCheck = /^(?:\d*\.\d{1,2}|\d+)$/;
  var itemAmount = todoAmount.value;
  if (!regCheck.test(itemAmount)) {
    alert("Please enter the amount you've spent here.");
    todoAmount.focus();
    return false;
  } else {
    return true;
  }
}



