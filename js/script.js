function exibirMensagem(event) {
    event.preventDefault();
    
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        const mensagem = "Bem vindo(a) de volta !!";
        document.getElementById("saida").innerHTML = mensagem;
        alert(mensagem);
        
        document.getElementById("login-email").value = "";
        document.getElementById("login-senha").value = "";
    }

}
