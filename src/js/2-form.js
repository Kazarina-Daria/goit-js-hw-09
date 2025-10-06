const formData = {email: '', message: ''};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', handlerText);

function handlerText(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
  formData.email = savedData.email || "";
    formData.message = savedData.message || "";
};

form.addEventListener('submit', handlersubmit);
function handlersubmit(e) {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
    return;
  }
  e.currentTarget.reset();
    console.log(formData);
  localStorage.removeItem(STORAGE_KEY);


}
