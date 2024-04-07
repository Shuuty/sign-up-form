const password = document.querySelector(`#user-password`);
const confirmPassword = document.querySelector(`#user-password-confirm`);
const button = document.querySelector(`#submit-button`)

confirmPassword.addEventListener("blur", function(){
    checkPassword(confirmPassword.value)
})

password.addEventListener(`blur`, function(){
    checkPassword()
})


function checkPassword() {
    const password1 = password.value;
    const password2 = confirmPassword.value;

    if(password1 !== password2) {
        button.disabled = true;
        password.style.borderBottom = `3px solid red`;
        confirmPassword.style.borderBottom = `3px solid red`;
        
    } else  {
        button.disabled = false;
        password.style.borderBottom = `3px solid rgb(167, 255, 255)`;
        confirmPassword.style.borderBottom = `3px solid rgb(167, 255, 255)`;
    }
}


