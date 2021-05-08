var cartaDoJogador
var cartaDaMaquina
var maquinaTela

var cirilo = {
  nome: "Cirilo",
  foto:  '<img class="ajustar" src="' + "http://3.bp.blogspot.com/-pSvvzj_NToU/UVUWN35XQwI/AAAAAAAAADc/TCIjiraRd1I/s1600/CIIRILO.png" +'">',
  atributos: {
    bondade: 90,
    esperteza: 50,
    simpatia: 85
  }
}
  
  var firmino = {
  nome: "Firmino",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExwmirxWQAAA2v-?format=png&name=small" +'">',
  atributos: {
    bondade: 80,
    esperteza: 60,
    simpatia: 80
  }
}

var jaime = {
  nome: "Jaime",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExxZrwTWQAEi0Sh?format=png&name=small" +'">',
  atributos: {
    bondade: 70,
    esperteza: 30,
    simpatia: 90
  }
}
  
  var alicia = {
  nome: "Alícia",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExxZrx9WUAMd06d?format=png&name=small" +'">',
  atributos: {
    bondade: 75,
    esperteza: 80,
    simpatia: 50
  }
}

var valeria = {
  nome: "Valéria",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExxZry2WUAQdQ8R?format=png&name=small" +'">',
  atributos: {
    bondade: 60,
    esperteza: 75,
    simpatia: 20
  }
}

var helena = {
  nome: "Professora Helena",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExxZrzeWQAcg6Rk?format=png&name=small" +'">',
  atributos: {
    bondade: 85,
    esperteza: 95,
    simpatia: 60
  }
}

var kokimoto  = {
  nome: "Kokimoto",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExxaEULWgAE_LPm?format=png&name=small" +'">',
  atributos: {
    bondade: 60,
    esperteza: 70,
    simpatia: 85
  }
}

var adriano  = {
  nome: "Adriano",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExwmirzWEAUsUOo?format=png&name=small" +'">',  
  atributos: {
    bondade: 90,
    esperteza: 50,
    simpatia: 80
  }
}

var mariaJoaquina = {
  nome: "Maria Joaquina",
  foto: '<img class="ajustar" src="' + "http://4.bp.blogspot.com/-7_vEChTfK8k/UIQG6NJv8YI/AAAAAAAAAIk/TFgPDPf5C14/s320/2012052211270055.png" +'">',
  atributos: {
    bondade: 50,
    esperteza: 85,
    simpatia: 70
  }
}

var olivia = {
  nome: "Diretora Olívia",
  foto: '<img class="ajustar" src="' + "https://pbs.twimg.com/media/ExwmisnWYAATq9c?format=png&name=small" +'">',
  atributos: {
    bondade: 20,
    esperteza: 75,
    simpatia: 85
  }
}

var cartas = [cirilo, firmino, jaime, alicia, valeria, helena, kokimoto, adriano, mariaJoaquina, olivia]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10)
  cartaDaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 10)
  while(numeroCartaJogador == numeroCartaMaquina) {
     numeroCartaJogador = parseInt(Math.random() * 10)
  }
  var jogador ="" 
  cartaDoJogador = cartas[numeroCartaJogador]  
  jogador += "<h2 class='tituloDoBloco'> Sua carta </h2>"
  jogador += "<h3>" +  cartaDoJogador.nome + "</h3>"
  jogador += "<p class='carta-imagem'>" + cartaDoJogador.foto + "</p>"
  jogador += "<p> Bondade: " + cartaDoJogador.atributos.bondade + "</p>"
  jogador += "<p> Esperteza: " + cartaDoJogador.atributos.esperteza + "</p>"
  jogador += "<p> Simpatia: " + cartaDoJogador.atributos.simpatia + "</p>"
  document.getElementById('carta-jogador').innerHTML = jogador
  
  var maquina = "" 
  cartaDaMaquina = cartas[numeroCartaMaquina]  
  maquina += "<h2 class='tituloDoBloco'> Carta da Máquina </h2>"
  maquina += "<h3>" +  cartaDaMaquina.nome + "</h3>"
  maquina += "<p class='carta-imagem'>" + cartaDaMaquina.foto + "</p>"
  maquina += "<p> Bondade: -- </p>"
  maquina += "<p> Esperteza: -- </p>"
  maquina += "<p> Simpatia: -- </p>"
  document.getElementById('carta-maquina').innerHTML = maquina
  maquinaTela = numeroCartaMaquina
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}
  

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for ( var atributo in cartaDoJogador.atributos) {
    opcoesTexto += "<div id='ajustarEscolha'><input type='radio' name = 'atributo' value='" + atributo + "'>" + atributo + "</div>" + "<br>" 
  }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  if(cartaDoJogador.atributos[atributoSelecionado] > cartaDaMaquina.atributos[atributoSelecionado]){
    document.getElementById('resultado').innerHTML = 'Parabéns, você venceu!'
  } else if (cartaDoJogador.atributos[atributoSelecionado] < cartaDaMaquina.atributos[atributoSelecionado]){
    document.getElementById('resultado').innerHTML = 'Que pena, você perdeu!'
  } else {
    document.getElementById('resultado').innerHTML = 'Olha só, deu empate!'
  }
  
  var maquina = "" 
  cartaDaMaquina = cartas[maquinaTela]  
  maquina += "<h2 class='tituloDoBloco'> Carta da Máquina </h2>"
  maquina += "<h3>" +  cartaDaMaquina.nome + "</h3>"
  maquina += "<p class='carta-imagem'>" + cartaDaMaquina.foto + "</p>"
  maquina += "<p> Bondade: " + cartaDaMaquina.atributos.bondade + "</p>"
  maquina += "<p> Esperteza: " + cartaDaMaquina.atributos.esperteza + "</p>"
  maquina += "<p> Simpatia: " + cartaDaMaquina.atributos.simpatia + "</p>"
  
   document.getElementById('carta-maquina').innerHTML = maquina
}
