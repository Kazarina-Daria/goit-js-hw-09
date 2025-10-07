const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {email: '', message: ''};


const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
  formData.email = savedData.email || "";
    formData.message = savedData.message || "";
};

form.addEventListener('input', handlerText);

function handlerText(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('submit', handlersubmit);
function handlersubmit(e) {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email="";
  formData.message="";


}
