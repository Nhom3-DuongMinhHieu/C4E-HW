let mail = document.querySelector("#mail"),
    pass = document.querySelector("#pass"),
    form = document.querySelector(".signup-form"),
    error = document.querySelector(".error")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    error.innerText = ""
    error.style.color = "red"
    error.style.fontWeight = "normal"
    let message = ""
    if (!mail.value) {
        message += "Email cannot be blank\n"
    }

    const count = mail.value.split("").filter((el) => el === "@").length
    if (count < 1) {
        message += "Please include an '@' in the email address\n" 
    }

    else if (count > 1) {
        message += "Email is not valid\n"
    }

    if (pass.value.length < 8) {
        message += "Password must be at least 8 characters\n"
    }

    if (message.length > 0) {
        error.innerText = message
    }
    
    else {
        error.innerText = "Account created successfully"
        error.style.color = "rgb(130, 201, 30)"
        error.style.fontWeight = "bold"
    }

})