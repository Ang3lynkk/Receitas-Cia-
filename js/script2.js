function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || senha === "") {
        alert("Falta preencher todos os campos!");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
}