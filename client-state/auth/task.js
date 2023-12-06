let card = document.querySelector(".signin");
let signinForm = document.getElementById("signin__form");
let signinBtn = document.getElementById("signin__btn");
let logoutBtn = document.getElementById("logout__btn");
let welcome = document.querySelector(".welcome");
let userId = document.getElementById("user_id");

let signIn = () => {
  card.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
};

window.onload = () => {
  if (localStorage.loginId) {
    signIn();
    userId.textContent = localStorage.loginId;
  }
};

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let user = new FormData(signinForm);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";

  xhr.send(user);
  console.log(xhr)

  xhr.onload = () => {
    let data = xhr.response;
    console.log(data);
    if (data.success) {
      signIn();
      userId.textContent = data.user_id;
      localStorage.loginId = data.user_id;
    } else {
      alert("неверный логин/пароль!");
      signinForm.reset();
    }
  };
});

logoutBtn.onclick = () => { 
  localStorage.clear();
  welcome.classList.remove("welcome_active");
  card.classList.add("signin_active");
  signinForm.reset();
};