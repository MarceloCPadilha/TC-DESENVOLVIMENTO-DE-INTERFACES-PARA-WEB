const botao = document.querySelector(".mudar-btn");
const cobrir = document.querySelector(".cobrir");
const cobrir_content = document.querySelector(".cobrir-conteudo");
const login = document.querySelector(".login");
const cadastro = document.querySelector(".cadastro");
const brilho = document.querySelector(".brilho");

botao.addEventListener("click", () => {
    // ativa brilho com animação
    brilho.classList.add("animando");

    cobrir.classList.toggle("esquerda");
    login.classList.toggle("esconder");
    cadastro.classList.toggle("mostrar");

    if (cobrir.classList.contains("esquerda")) {
        botao.textContent = "Cadastrar";
        cobrir_content.textContent = "Ainda não tem uma conta?";
    } else {
        botao.textContent = "Fazer Login";
        cobrir_content.textContent = "Já tem uma conta?";
    }

    setTimeout(() => {
        brilho.classList.remove("animando");
    }, 800); // duração do transition
});