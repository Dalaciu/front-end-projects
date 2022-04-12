//SELECTORS
const words = document.getElementsByClassName("form-control")[0];
const checkButton = document.getElementsByClassName("btn-success");

//EVENT LISTENERS
checkButton[0].addEventListener("click", countVowel);

//FUNCTIONS

function countVowel() {
  var input = words.value;

  var totalVowels = input.replace(/[^aeiouAEIOU]/g, "").length;
  showPopup(totalVowels);
}

function showPopup(count) {
  document.getElementById("result").textContent =
    "Vowels in your sentence: " + count;
}
