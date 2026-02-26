document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    var email = document.getElementById("login-email").value;
    var senha = document.getElementById("login-senha").value;

    if (email === "" || senha === "") {
        alert("Preencha o email e a senha!");
    } else {
        alert("Login realizado com sucesso!");
    }

});