var userName = localStorage.getItem("userName");
var logUserName = document.querySelector("#logUserName");
var logOutBtn = document.querySelector("#logOutBtn");

logUserName.innerHTML = userName

logOutBtn.addEventListener("click", function(e){
    e.preventDefault()
    window.location.href="../../Login/index.html"
    localStorage.removeItem("userName")
})