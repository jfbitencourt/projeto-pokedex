/*       Lista de tarefas a ser realizadas!

O que precisamos fazer - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da pagina de claro para escuro e vise-versa.
# OBJETIVO 1 - quando clicar no boão de tema, adicionar a clase modo-escuro no body pra que os esilosdo modo escuro sejam aplicados e mudar a imagem pa lua;
 Passo 1 =  pegar no JS o elemeno HTML correspondente ao botão de troca de tema
 Passo 2 =  pegar no JS o  elemento HTML correspondente ao body
 Passo 3 = indentificar o clique do usuario no botão de troca de tema
 Passo 4 = adicionar classe modo-escuro no body
 Passo 5 = trocar a imagem do botão de alterar tema pra lua
 #OBJETIVO 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe pa mudar pro modo claro e mudar a imagem pra do sol;
 Passo 6 executar depos do passo 3 = verificar se o body ja tem a classe modo-escuro.
 Passo 7 = remover a classe do mod-escuro do body
 Passo 8 = trocar a imagem do botão e alterar tema pra sol. 
 Passo nove adicionar a funcionalida .toggle removendo o 
body.classList.remove("modo-escuro"); e o  body.classList.add("modo-escuro");
 
 Passo 1
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

Passo 2
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

 Passo 3
botaoAlterarTema.addEventListener("click", () => {

  Passo 6
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  Passo 9
  body.classList.toggle("modo-escro");

  if (modoEscuroEstaAtivo) {

    Passo 7(removido no Passo 9)
    body.classList.remove("modo-escuro");

     Passo 8
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {

    Passo 4(removido no Passo 9)
    body.classList.add("modo-escuro");

    Passo 5
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
