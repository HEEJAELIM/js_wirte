const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const login = document.querySelector("#login");
const hello = document.querySelector("#hello");

const HIDDEN = "hidden";

function onSubmit(event) {
  event.preventDefault();
  const name = loginInput.value;
  localStorage.setItem("name-key", name);
  loginForm.classList.add(HIDDEN);
  view(name);
}

function view(text) {
  hello.classList.remove(HIDDEN);
  hello.innerText = `Hello ${text}`;
}

const getname = localStorage.getItem("name-key");

if (getname === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onSubmit);
} else {
  view(getname);
}
