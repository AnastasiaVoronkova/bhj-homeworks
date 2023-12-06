let subsModal = document.getElementById("subscribe-modal");
let modalClose = document.querySelector(".modal__close");

if (document.cookie.includes("modalclose") === false) {
  subsModal.classList.add("modal_active"); 
}

modalClose.onclick = () => {
  subsModal.classList.remove("modal_active"); 
  document.cookie = "modalclose = true"; 
};