var jogadores = []

function adicionarJogador() {
   var resposta = document.querySelector('#nome')
   var nomeDoJogador = resposta.value.toUpperCase()
   var imagem = '<img class="ajustar" src="' + document.getElementById('imagem').value + '">';
   var imagem1 = document.getElementById('imagem').value
   if ( nomeDoJogador != "" && imagem1.endsWith('.jpg') || imagem1.endsWith('.png')) {
     var jogador = {
       foto: imagem,
       nome: nomeDoJogador,
       vitorias: 0,
       empates: 0,
       derrotas: 0,
       pontos: 0
     }
     jogadores.push(jogador)
     jogador.pontos = calculaPontos(jogador)
     exibirJogadoresNaTela(jogadores)
     document.getElementById('resultado').innerHTML = "";
   } else {
     document.getElementById("resultado").innerHTML = "Por favor, digite um nome e uma url válida!"
   }
   document.getElementById("nome").focus();
   document.getElementById("nome").value = "";
   document.getElementById("imagem").focus();
   document.getElementById("imagem").value = "";
 }

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

function exibirJogadoresNaTela(jogadores) {
    var aux;
  for(var i = 0; i < jogadores.length; i++){
    for(var j = 0; j < jogadores.length; j++){
      if(jogadores[i].pontos > jogadores[j].pontos){
        aux = jogadores[i];
        jogadores[i] = jogadores[j];
        jogadores[j] = aux;
      }  
    }
  }
  var html = ""
  for( var cont = 0; cont < jogadores.length; cont++)  {
    html += "<tr><td>" + jogadores[cont].foto + '</td>'
    html += "<td>" + jogadores[cont].nome + "</td>"
    html += "<td>" + jogadores[cont].vitorias + "</td>"
    html += "<td>" + jogadores[cont].empates + "</td>"
    html += "<td>" + jogadores[cont].derrotas + "</td>"
    html += "<td>" + jogadores[cont].pontos + "</td>"
    html += "<td><button id='addV' onClick='adicionarVitoria(" + cont +")'>Vitória</button></td>"
    html += "<td><button id='addE' onClick='adicionarEmpate(" + cont +")'>Empate</button></td>"
    html += "<td><button id='addD' onClick='adicionarDerrota(" + cont +")'>Derrota</button></td>"
    html += "<td><button id='add' onClick='resetPontos(" + cont + ")'>Resetar Pontos</button></td></tr>"
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(cont) {
  var jogador = jogadores[cont]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(cont) {
  var jogador = jogadores[cont]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(cont) {
  var jogador = jogadores[cont]
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores)
}

function resetPontos(){
    for(var i = 0; i < jogadores.length; i++){   
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = 0
        exibirJogadoresNaTela(jogadores)
    }
}
