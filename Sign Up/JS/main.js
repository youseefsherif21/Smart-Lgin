var SignForm = document.querySelector("form");
var SignUserName = document.querySelector("#SignUserName");
var signUserEmail = document.querySelector("#signUserEmail");
var SignUserPassword = document.querySelector("#SignUserPassword");
var signBtn = document.querySelector("#signBtn");
var userNameAlert = document.querySelector("#userNameAlert");
var emailAlert = document.querySelector("#emailAlert");
var passAlert = document.querySelector("#passAlert");
var emailAlert2 = document.querySelector("#emailAlert2");
var allUsers = [];

if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

var regex = {
    SignUserName: {
        value: /^[a-zA-Z][a-zA-Z0-9_]{3,}$/,
        alert: userNameAlert
    },
    signUserEmail: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        alert: emailAlert
    },
    SignUserPassword: {
        value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        alert: passAlert
    }
}


function validatInput(element) {
    if (regex[element.id].value.test(element.value)) {
        regex[element.id].alert.classList.replace("d-block", "d-none");
        return true;
    } else {
        regex[element.id].alert.classList.replace("d-none", "d-block");
        return false;
    }
}


function checkInput() {
    if (validatInput(SignUserName) && validatInput(signUserEmail) && validatInput(SignUserPassword)) {
        return true;
    } else {
        return false;
    }
}


function addUser() {
    var newUser = {
        name: SignUserName.value,
        email: signUserEmail.value,
        password: SignUserPassword.value
    }
    if (isAlreadyExist(newUser) == true) {
        emailAlert2.classList.replace("d-none", "d-block");
    } else {
        allUsers.push(newUser);
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        emailAlert2.classList.replace("d-block", "d-none");
        window.location.href = "../../Login/index.html";
    }
}


SignForm.addEventListener("submit", function(e) {
    e.preventDefault();
    validatInput(SignUserName);
    validatInput(signUserEmail);
    validatInput(SignUserPassword);
    if (checkInput() == true) {
        addUser()
    }
})


function isAlreadyExist(element) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == element.email.toLowerCase()) {
            return true
        }
    }
}