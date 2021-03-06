fetch("https://puzzle.mead.io/puzzle").then((responce) => {
  responce.json().then((data) => {
    console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message_1 = document.getElementById("message-1");
const message_2 = document.getElementById("message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  message_1.textContent = "Loading....";
  message_2.textContent = "";

  fetch("/weather?address=" + location).then((responce) => {
    responce.json().then((data) => {
      if (data.error) {
        message_1.textContent = data.error;
      } else {
        message_1.textContent = data.location;
        message_2.textContent = data.forecast;
      }
    });
  });
});
