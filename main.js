let form = document.querySelector("form");
let emailInput = document.querySelector('.email');
let errorIcon = document.querySelector(".error-icon");
let errorMessage = document.querySelector(".error-message");

function submitForm(e){
    e.preventDefault();
    console.log(`emailinput is ${emailInput.value}`);
    let inputText = emailInput.value;
    if(!inputText.includes("@.") || inputText.length < 3){
        errorIcon.classList.toggle("hide");
        errorMessage.classList.toggle("hide");
        emailInput.classList.toggle("error");
    } else{
        window.location.reload();
    }
}

form.addEventListener("submit", submitForm);