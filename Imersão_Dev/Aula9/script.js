var vitoria = new Audio('https://freesound.org/data/previews/476/476178_6101353-lq.mp3');
var derrota = new Audio('https://freesound.org/data/previews/483/483598_6436863-lq.mp3');
var empate = new Audio('https://freesound.org/data/previews/395/395482_7509543-lq.mp3');

var neymarEcirilo = {
  nome: "Neymar e Cirilo - SUPER",
  foto: "https://extra.globo.com/incoming/7914334-f6a-7e8/w448/neymar-e-cirilo-carrossel.jpg",
  atributos: {
    habilidade: 100,
    resenha: 100,
    perna: 100
  }
}
  
  var ronaldinhoGaucho = {
  nome: "Ronaldinho Gaúcho",
  foto: "https://jmonline.com.br/userfiles/image/2020/04/29/ronaldinho.jpg",
  atributos: {
    habilidade: 95,
    resenha: 90,
    perna: 20
  }
}

var marcelinhoCarioca = {
  nome: "Marcelinho Carioca",
  foto:  "https://static.corinthians.com.br/uploads/15774739914b2e12b43338e42361077cb6516ad63e.jpg",
  atributos: {
    habilidade: 75,
    resenha: 50,
    perna: 30
  }
}
  
  var adrianoImperador = {
  nome: "Adriano Imperador",
  foto: "https://m.extra.globo.com/incoming/24351404-464-268/w488h275-PROP/adriano.jpg",
  atributos: {
    habilidade: 90,
    resenha: 95,
    perna: 40
  }
}

var aloisioChulapa = {
  nome: "Aloísio Chulapa",
  foto: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/06/Alo%C3%ADsio-Chulapa.jpg",
  atributos: {
    habilidade: 65,
    resenha: 80,
    perna: 50
  }
}

var ronaldoFenomeno = {
  nome: "Ronaldo Fenômeno",
  foto: "https://i.pinimg.com/originals/09/5a/85/095a85375efb870e9ac81ea5e626dfb8.jpg",
  atributos: {
    habilidade: 95,
    resenha: 50,
    perna: 40
  }
}

var vampeta  = {
  nome: "Vampeta",
  foto: "https://www.hojeemdia.com.br/polopoly_fs/1.666354!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
  atributos: {
    habilidade: 60,
    resenha: 90,
    perna: 60
  }
}

var romario  = {
  nome: "Romario",
  foto: "https://upload.wikimedia.org/wikipedia/commons/4/42/Foto_oficial_de_Rom%C3%A1rio_%28v._AgSen%29.jpg",
  atributos: {
    habilidade: 90,
    resenha: 80,
    perna: 85
  }
}

var denilson = {
  nome: "Denilson",
  foto: "https://pbs.twimg.com/profile_images/1297916749728362499/oSW7qNN7.jpg",
  atributos: {
    habilidade: 80,
    resenha: 65,
    perna: 75
  }
}

var amaral = {
  nome: "Amaral",
  foto: "http://globoesporte.globo.com/Esportes/foto/0,,15028275-EX,00.jpg",
  atributos: {
    habilidade: 65,
    resenha: 75,
    perna: 30
  }
}

var pele = {
  nome: "Pelé",
  foto: "https://cdn.britannica.com/s:575x450/38/211838-004-9A4193CB.jpg",
  atributos: {
    habilidade: 80,
    resenha: 40,
    perna: 10
  }
}

var messi = {
  nome: "Lionel Messi",
  foto: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Lionel_Messi_20180626_%28cropped%29.jpg",
  atributos: {
    habilidade: 90,
    resenha: 30,
    perna: 20
  }
}

var cristianoRonaldo = {
  nome: "Cristiano Ronaldo",
  foto: "https://assets.b9.com.br/wp-content/uploads/2018/07/cr7-juve-b9.jpg",
  atributos: {
    habilidade: 90,
    resenha: 50,
    perna: 40
  }
}

var mbappe = {
  nome: "Kylian Mbappé",
  foto: "https://conteudo.imguol.com.br/c/esporte/34/2021/02/07/kylian-mbappe-comemora-gol-pelo-psg-contra-o-olympique-de-marselha-pelo-frances-1612732714791_v2_450x800.png",
  atributos: {
    habilidade: 85,
    resenha: 60,
    perna: 40
  }
}

var marinho = {
  nome: "Marinho",
  foto: "https://www.lance.com.br/files/article_main/uploads/2020/12/26/5fe75a65c2ced.jpeg",
  atributos: {
    habilidade: 75,
    resenha: 80,
    perna: 30
  }
}

var alisson = {
  nome: "Alisson",
  foto: "https://i.pinimg.com/originals/8e/04/a5/8e04a54360bd84467fd69fd135658adc.jpg",
  atributos: {
    habilidade: 60,
    resenha: 60,
    perna: 20
  }
}

var cartas = [neymarEcirilo, ronaldinhoGaucho, marcelinhoCarioca, adrianoImperador, aloisioChulapa, ronaldoFenomeno, vampeta, romario, denilson, amaral, pele, messi, cristianoRonaldo, mbappe, marinho, alisson]
var cartaJogador
var cartaMaquina
var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar();
atualizaQuantiadadeDeCartas();

function atualizaQuantiadadeDeCartas(){
  var divQuantiadadeCartas = document.getElementById('quantidade-cartas');
  var html = "<div id='qntCartas'> Ainda restam no jogo: " + cartas.length + " cartas</div>"
  divQuantiadadeCartas.innerHTML = html;
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar');
  var html = "<div id='placar'> Jogador " + pontosJogador + " X " + pontosMaquina + " Máquina</div>";
  
  divPlacar.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  
   var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>` 
  var opcoesTexto = "";
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + "-" +"<br>" ;
    }
    //opcoes.innerHTML = opcoesTexto;
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>';
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById('resultado');
    var atributoSelecionado = obtemAtributoSelecionado()
    if (atributoSelecionado != null) {
      document.getElementById('btnJogar').disabled = true;
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        Swal.fire({
        icon: 'success',
        title: 'Excelente meu(inha) consagrado(a)',
        text: 'Você ganhou a rodada!'
      })
      exibeCartaMaquina();
      pontosJogador++
        vitoria.play();
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        Swal.fire({
        icon: 'error',
        title: 'Pô meu, Infelizmente não deu :(',
        text: 'Você Perdeu a rodada!'
        })
      exibeCartaMaquina();
      pontosMaquina++
      derrota.play();
    } else {
        Swal.fire({
        icon: 'info',
        title: 'Foi por pouco ',
        text: 'Empate!'
        })
      exibeCartaMaquina();
      empate.play();
    } } else {
      Swal.fire({
        icon: 'info',
        title: 'Escolha uma opção ',
        text: 'Por favor!'
        })
    } 
  
    if(cartas.length == 0) {
    Swal.fire({
        icon: 'info',
        title: 'Fim de jogo ',
        text: 'Clique em próxima rodada para continuar jogando'
        })
    if(pontosJogador > pontosMaquina){
      Swal.fire({
        icon: 'success',
        title: 'AI SIM MEU(INHA) VENCEDOR(A)',
        text: 'Você ganhou a partida!'
      })
    } else if(pontosMaquina < pontosJogador) {
      Swal.fire({
        icon: 'error',
        title: 'É realmente uma pena amigo(a):(',
        text: 'Você Perdeu a partida!'
      })
    } else {
       Swal.fire({
        icon: 'info',
        title: 'Foi por pouco ',
        text: 'Empate!'
        })
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false;
  }
  atualizaQuantiadadeDeCartas()
  atualizaPlacar();
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas');
  
  divCartas.innerHTML = '<div class="cartaUm"> <div id="carta-jogador" class="carta"></div></div> <div id="resultado"></div>  <div class="cartaDois"> <div id="carta-maquina" class="carta"></div></div>';
  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;
  document.getElementById('btnProximaRodada').disabled = true;
  
  var divResultado = document.getElementById('resultado');
  divResultado.innerHTML = "";
}
