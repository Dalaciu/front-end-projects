// On Submit click strart
var item = document.getElementById("add-item");

item.addEventListener("click", (e) => {
  var data = document.getElementById("textfield");
  if (validateItem()) {
    // DOM work start
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    const newButton = document.createElement("button");
    newLi.className = "list-group-item d-flex align-items-center";
    newP.className = "ps-1 m-0 d-flex flex-grow-1";
    newButton.className = "clear-one btn btn-danger";

    newP.appendChild(document.createTextNode(data.value));
    newButton.appendChild(document.createTextNode("\u2715"));

    newLi.appendChild(newP);
    newLi.appendChild(newButton);

    const orderedItems = document.getElementById("ordered-items");
    orderedItems.insertBefore(newLi, orderedItems.newLi);
    textfield.value = ""
    // DOM work end
  }
});
// On Submit click end

// On X click start
const orderedItems = document.getElementById("ordered-items");

orderedItems.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] === "clear-one") {
    item.parentElement.remove();
  }
});
// On X click end

// On Clear list click start
const clearAll = document.getElementById("clear-all");

clearAll.addEventListener("click", (e) => {
  const clearAll = e.target;
  const orderedItems = document.getElementById("ordered-items");
  orderedItems.innerHTML = "";
});
// On Clear list click end

// Text field validation function start
function validateItem() {
  var regCheck = /^(?![0-9 ]*$)[ a-zA-Z0-9]{2,30}$/;
  var itemName = document.getElementById("textfield").value;
  if (!regCheck.test(itemName)) {
    alert("Please enter a valid item name.");
    document.getElementById("textfield").focus();
    return false;
  } else {
    return true;
  }
}
// Text field validation function end
