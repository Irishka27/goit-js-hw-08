import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit' , onFormSubmit);
document.addEventListener('DOMContentLoaded', checked);


function onFormInput(e){
    const mail = input.value;
    const message = textarea.value;
    const feedbackFormData = {mail, message, };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
 };
function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    const mail = input.value;
    const message = textarea.value;
    const feedbackFormData = {mail, message, };
    const saved = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(saved);
    localStorage.removeItem('feedback-form-state');
};
function checked() {
    const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(savedInput){
       input.value = savedInput.mail;
        textarea.value = savedInput.message;
    }
   };


