let progress = document.getElementById("progress");
let form = document.getElementById("form");
let sendFile = new FormData(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(sendFile);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };
  xhr.send(sendFile);
});