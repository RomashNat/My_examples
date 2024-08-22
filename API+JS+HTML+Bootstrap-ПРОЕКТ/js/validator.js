function validateEmail()
{
    const email = document.getElementById("inputEmail");
    email.addEventListener("input", () => 
    {
        if (email.validity.typeMismatch) 
            email.setCustomValidity("Ожидалась почта"); 
        else
            email.setCustomValidity(""); 
    });
}

function validatePassword()
{
    const checkPassword = new RegExp('^[a-zA-Z0-9_.-]*$')
    const password = document.getElementById('inputPassword');
    password.addEventListener("input", () =>
    {
        console.log(checkPassword.exec(password.value));
        if (checkPassword.exec(password.value) != null && password.value.length > 7)
            password.setCustomValidity("");
        else if (password.value.length <= 7)
            password.setCustomValidity("Пароль должен быть больше 7 символов");
        else
            password.setCustomValidity("В пароле недопустимые символы. Можно вводить a-zA-Z0-9_.-");
    });
}

function checkFields()
{
    const form = document.getElementById("formSend");

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        event.stopPropagation();

        let email = document.getElementById("inputEmail").value;
        let password = document.getElementById("inputPassword").value;
        if (email === "" || password === "")  alert("Поля пустые");
        else  form.submit();
    });
}

checkFields();
validateEmail();
validatePassword();