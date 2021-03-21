
const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "lata.jpg",
  'maça.jpg',
  'papel.jpg',
  'plastico.jpg',
  'todasasfotos.jpg',
  'vidro2.jpg',
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/capinha.png">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim da Renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));

function carregar(){
  window.location.reload();
} 

function verificar(){
  var questao1 = document.getElementsByName("pri")
  var questao2 = document.getElementsByName("seg")
  var questao3 = document.getElementsByName("ter")
  var questao4 = document.getElementsByName("quart")
  var questao5 = document.getElementsByName("cinc")
  var questao6 = document.getElementsByName("sext")
  var questao7 = document.getElementsByName("set")
  var questao8 = document.getElementsByName("oito")
  var questao9 = document.getElementsByName("nove")
  var questao10 = document.getElementsByName("dez")
  /*----------------------------------------------- */
  var res = document.getElementById("res")
  var resposta = 0
  var vetres = []
  res.innerHTML = ''
  
  if(questao1[2].checked){
    resposta =  resposta + 1
    vetres[0] = ''
  }else{
    vetres[0] = '1ª QUESTÃO: Conjunto de ações voltadas para a busca de soluções dos resíduos sólidos, considerando as dimensões políticas, econômica, ambiental, cultural e social. <br>'
    resposta = resposta + 0
  }

  if(questao2[1].checked){
    resposta = resposta + 1
    vetres[1] =''
  }else{
    vetres[1] = '2ª QUESTÃO: 10.004 <BR>' 
    resposta = resposta + 0
  }
  if(questao3[3].checked){
    resposta = resposta + 1
    vetres[2] = ''
  }else{
    vetres[2] = '3ª QUESTÃO: Resíduos Sólidos Urbanos, Resíduos Industriais, Resíduos de Serviços de Saúde, Resíduos da Construção Civil, Resíduos Radioativos. <BR>'
    resposta = resposta + 0
  }
  if(questao4[0].checked){
    resposta = resposta + 1
    vetres[3] = ''
  }else{
    vetres[3] = '4ª QUESTÃO: Resíduos Perigosos - CLASSE I, Resíduos Não Perigosos - CLASSE II <br>'
    resposta = resposta + 0
  }
  if(questao5[2].checked){
    resposta = resposta + 1
    vetres[4] = ''
  }else{
    vetres[4] = '5ª QUESTÃO: Classe A - Não inertes, Classe B´- Inertes. <br>'
    resposta = resposta + 0
  }
  if(questao6[1].checked){
    resposta = resposta + 1
    vetres[5] = ''
  }else{
    vetres[5] = '6ª QUESTÃO: Coleta de resíduos previamente segregados conforme sua constituição ou composição. <br>'
    resposta = resposta + 0
  }

  if(questao7[3].checked){
    resposta = resposta + 1
    vetres[6] = ''
  }else{
    vetres[6] = '7ª QUESTÃO: "Processos por meio dos quais o indivíduo e a coletividade constroem valores sociais, conhecimentos, habilidades, atitudes e competências voltadas para a conservação do meio ambiente, bem de uso comum do povo, essencial à sadia qualidade de vida e sua sustentabilidade."  <br>'
    resposta = resposta + 0
  }
  if(questao8[2].checked){
    resposta = resposta + 1
    vetres[7] = ''
  }else{
    vetres[7] = '8ª QUESTÃO: Repensar, Reduzir, Reutilizar e Reciclar. <br>'
    resposta = resposta + 0
  }
  if(questao9[0].checked){
    resposta = resposta + 1
    vetres[8] = ''
  }else{
    vetres[8] = '9ª QUESTÃO : <B>Reutilizar:</B> Processo de aproveitamento dos resíduos sólidos em que haja transformação biológica, física ou química, <B>Reciclar:</B> Processo de transformação dos resíduos sólidos que envolve a alteração de suas propriedades físico-químicas ou biológicas, produzindo insumos ou novos produtos.  <br>'
    resposta = resposta + 0
  }
  if(questao10[3].checked){
    resposta = resposta + 1
    vetres[9] = ''
  }else{
    vetres[9] = '10ª QUESTÃO: Sensibilização ambiental, Destaque no mercado, Diminuição de custo, Expansão de conhecimento.  <br>'
    resposta = resposta + 0
  }
  /*--------------------------------------------------------------------------------------------*/
  if(resposta == 10){
    res.style.fontSize = '25pt'
    res.innerHTML += '<b> PARABÉNS!!! Você acertou todas as perguntas do quiz!</br>'
  }else{
    res.innerHTML += `Você acertou ${resposta} de 10 questões <br> <br>`
  }

  
  if(resposta != 10){
    res.innerHTML += '<b>RESPOSTAS CERTAS DAS QUESTÕES QUE VOCÊ ERROU<b> <BR> <br>'
    for(i = 0; i < 10; i++){
      res.innerHTML += `${vetres[i]} <br>`
    }
  }
 




}