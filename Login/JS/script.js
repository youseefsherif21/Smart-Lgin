var loginForm = document.querySelector("form");
var loginUserEmail = document.querySelector("#loginUserEmail");
var loginUserPassword = document.querySelector("#loginUserPassword");
var emailAlert = document.querySelector("#emailAlert");
var passAlert = document.querySelector("#passAlert");
var allUsers = [];

if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}


loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    login()
})


function login() {
    var loginData = {
        email: loginUserEmail.value,
        password: loginUserPassword.value,
    }
    if (checkUser(loginData) == true) {
        window.location.href="../../Home/index.html"
    }
}

function checkUser(loginData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == loginData.email.toLowerCase() && allUsers[i].password == loginData.password) {
            emailAlert.classList.replace("d-block", "d-none");
            passAlert.classList.replace("d-block", "d-none");
            localStorage.setItem("userName", allUsers[i].name);
            return true;
        } else if (allUsers[i].email.toLowerCase() == loginData.email.toLowerCase() && allUsers[i].password != loginData.password) {
            passAlert.classList.replace("d-none", "d-block");
            emailAlert.classList.replace("d-block", "d-none");
        } else if (allUsers[i].email.toLowerCase() != loginData.email.toLowerCase() && allUsers[i].password != loginData.password) {
            passAlert.classList.replace("d-none", "d-block");
            emailAlert.classList.replace("d-none", "d-block");
        } else if (allUsers[i].email.toLowerCase() != loginData.email.toLowerCase() && allUsers[i].password == loginData.password) {
            emailAlert.classList.replace("d-none", "d-block");
            passAlert.classList.replace("d-block", "d-none");
        }
    }
}