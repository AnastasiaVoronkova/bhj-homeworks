let editor = document.getElementById("editor");

let button = document.querySelector(".button");

editor.value = localStorage.getItem("key");

editor.addEventListener("input", () => {
  localStorage.setItem("key", editor.value);
});

button.addEventListener("click", function () {
  localStorage.removeItem("key");
  editor.value = "";
});