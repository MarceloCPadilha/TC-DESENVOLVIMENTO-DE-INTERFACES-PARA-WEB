const botao = document.querySelector(".mudar-btn");
const cobrir = document.querySelector(".cobrir");

botao.addEventListener("click", () => {
    cobrir.classList.toggle("esquerda");
});