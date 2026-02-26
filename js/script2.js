function exibirMensagem(event) {
    event.preventDefault();
    const nome = document.getElementById("login-nome").value;
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;
    if ( nome === "" ||email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        const mensagem = "Cadastro concluido com sucesso !!";
        document.getElementById("saida").innerHTML = mensagem;
        alert(mensagem);

        document.getElementById("login-nome").value = "";
        document.getElementById("login-email").value = "";
        document.getElementById("login-senha").value = "";
    }

}
