const formData = {
     email: "",
     message: "",
};

let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
const email = form.querySelector(".input-email");



form.addEventListener("input", handlerEmailText);
function handlerEmailText (e){
  const emailMessage = e.target.value;
  localStorage.setItem(STORAGE_KEY, emailMessage);
}

form.addEventListener("submit", handlersubmit);

function handlersubmit(e){
    e.preventDefault();
    e.currenTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
      formData = {};
};
