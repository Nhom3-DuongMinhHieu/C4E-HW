let mail = document.querySelector("#mail"),
    pass = document.querySelector("#pass"),
    btn = document.querySelector("#btn"),
    mail_error = document.querySelector(".mail-error"),
    pass_error = document.querySelector(".pass-error"),
    error = document.querySelector(".error")

btn.addEventListener("click", () => {
    if (!mail.value) {
        mail_error.innerHTML = "Email cannot be blank"
    }

    else {
        for (let i = 0; i < mail.value.length; i++) {
            if (mail.value[i] == "@") {
                mail_error.innerHTML = ""
            }

            else {
                mail_error.innerHTML = "Please include an '@' in the email address"
            }
        }
    }
})

btn.addEventListener("click", () => {
    if (pass.value.length < 8) {
        pass_error.innerHTML = "Password must be at least 8 characters"
        pass.value = ""
    }

    else {
        pass_error.innerHTML = ""
    }
})

btn.addEventListener("click", () => {
    for (let i = 0; i < mail.value.length; i++) {
        if (mail.value[i] == "@" && pass.value.length >= 8) {
            error.style.color = "rgb(130, 201, 30)"
            error.style.fontWeight = "bold"
            error.innerHTML = "Account created successfully"
        }
    }
})