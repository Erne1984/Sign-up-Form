const password = document.querySelector("#password");
const passwordMsg = document.querySelector("#password-msg");
const passwordConfirmation = document.querySelector("#con-password");

function comparePasswords() {
    const confirmation = password.value === passwordConfirmation.value;

    [password, passwordConfirmation].forEach(element => {
        element.classList.toggle("error", !confirmation);
    });

    passwordMsg.innerHTML = confirmation ? "" : "* Passwords do not match!";
}

passwordConfirmation.addEventListener("blur", () => {
    comparePasswords()
})