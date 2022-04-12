//SELECTORS

var modalBox = document.querySelector(".modal-box");
var modalClose = document.querySelector("#modal");
var modalCloseButton = document.querySelector(".modal-close");
var submitButton = document.querySelector("#submit-button");
var noteTitle = document.querySelector("#title-value");
var noteBody = document.querySelector("#input-box");
var notesPannel = document.querySelector(".notes-pannel");

//EVENT LISTENERS

notesPannel.addEventListener("click", popModal);
modalBox.addEventListener("click", closeModal);
submitButton.addEventListener("click", validateForm);

//FUNCTIONS

// Triggering modal's style
function popModal(e) {
  const item = e.target;
  if (item.classList[0] === "expand-btn") {
    modalBox.classList.add("modal-box-active");
  }
}

// Closing on X or outside click
function closeModal(e) {
  if (e.target == modalCloseButton || e.target == modalBox) {
    modalBox.classList.remove("modal-box-active");
  }
}

function validateForm() {
  var regCheck = /^$|\s+/;
  var checkTitle = noteTitle.value;
  var checkBody = noteBody.value;
  if (regCheck.test(checkTitle && checkBody)) {
    alert("No blank spaces please.");
    return true;
  } else {
    spawnObject();
    return false;
  }
}

function spawnObject() {
  // Creating the note block
  const divBlock = document.createElement("div");
  const noteHeader = document.createElement("h5");
  const noteText = document.createElement("p");
  const expandButton = document.createElement("button");

  // Adding clases and attributes to the note block
  divBlock.classList.add(
    "note-block",
    "p-4",
    "mb-5",
    "border",
    "border-secondary",
    "rounded-1"
  );

  noteText.classList.add("text-break");

  expandButton.setAttribute("type", "button");
  expandButton.classList.add("expand-btn", "btn", "btn-primary", "btn-sm");
  expandButton.textContent = "Expand";

  // Nesting childs inside the note block
  divBlock.appendChild(noteHeader);
  divBlock.appendChild(noteText);
  divBlock.appendChild(noteText);
  divBlock.appendChild(expandButton);

  // adding the note block to notes section
  notesPannel.appendChild(divBlock);

  // Grabbing & appending user inputs
  noteHeader.textContent = noteTitle.value;
  noteText.textContent = noteBody.value;

  // console.log(noteTitle.value);
  // console.log(noteBody.value);
}
