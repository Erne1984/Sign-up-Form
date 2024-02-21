const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#con-password");

function comparePasswords(){
    const confirmation = password.value === passwordConfirmation.value? false: true;

    if(!confirmation){
        console.log(confirmation);
    }else{
        console.log(confirmation);
    }
}

passwordConfirmation.addEventListener("blur", () => {
    comparePasswords()
})