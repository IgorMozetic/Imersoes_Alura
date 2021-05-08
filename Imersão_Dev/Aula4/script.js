var serie = ["https://m.media-amazon.com/images/M/MV5BMTdiNDIyMGEtNWJjMi00ODlhLWJhM2EtYjJjMjFlMjNhNDEwXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_UY268_CR9,0,182,268_AL_.jpg",
              "https://m.media-amazon.com/images/M/MV5BMzk0MzkxODMwOV5BMl5BanBnXkFtZTgwMjQzODE4NzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BOTJhMjhhZDItZTQxMi00NGM3LTliZjYtMjcyMWE2YzYwNTA0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BMjEzMzg4ODgyN15BMl5BanBnXkFtZTgwODA4Nzk5MTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BMjI5NjUzMTcwNF5BMl5BanBnXkFtZTgwODE3NzQxMDE@._V1_UY268_CR0,0,182,268_AL_.jpg", 
             "https://m.media-amazon.com/images/M/MV5BMTVhNmMyNDEtM2Q0NC00MWJiLTkyY2YtYTM3NmVjM2FjNTg5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BYjZhY2NiN2EtMjMwZi00YTZlLTljOTktYTExNjliZTQ5ZTMxXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BODM3OTU1NDItNmFiNC00Nzk1LWFlOTMtODA2MWJjZmNmNzA0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR0,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BYjEzOTExOTEtZmEyZC00MGQ2LWFmMjQtZGY2MDg2ZGY4YWVmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
             
             "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_UY268_CR1,0,182,268_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMmZlMDA2NWUtYzJjZC00ZWMwLTk4MzktNjAwNzBjYjdhZmRiXkEyXkFqcGdeQXVyOTM1Njc1ODM@._V1_UY268_CR8,0,182,268_AL_.jpg"]
             

var nomeSerie = ["A Casa do Mickey Mouse",
                 "Agente Carter da Marvel",
                 "Agentes da S.H.I.E.L.D. da Marvel",
                 "Austin & Ally",
                 "Boa Sorte, Charlie!",
                 "Fugitivos da Marvel",
                 "Hannah Montana",
                 "High School Musical: A Série: O Musical",
                 "Kick Buttowski: Um Projeto de Dublê",
                 "Os Simpsons",
                 "Phineas e Ferb",
                 "Zack & Cody: Gêmeos a Bordo"]

for(var cont = 0; cont < serie.length; cont++) {
  document.write("<div class=alinhar><p> <img src = " + serie[cont] + "</p><p class=nomeSeries>" + nomeSerie[cont] +"</p></div>")
  // document.write("<p class=nomeSeries>" + nomeSerie[cont] +"</p>")
}

document.getElementById("botao").onclick = function () {
  var resposta = document.getElementById("nome").value.toLowerCase();
  
  if( resposta == "hannah montana") {
    var gifHannah = "https://media2.giphy.com/media/114tVAQijoMPNS/giphy.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifHannah + ">";
  } else if (resposta == "phineas e ferb") { 
    var gifFerb = "https://m.gifmania.pt/Gifs-Animados-Desenhos-Animados/Imagens-Animadas-Disney-Channel/Gif-Animados-Phineas-E-Ferb/Phineas-E-Ferb-71251.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifFerb + ">";
  } else if (resposta == "zack & cody: gêmeos a bordo") {
    var gifGemeos = "http://2.bp.blogspot.com/-wqoYA4z0bu0/UAtGOWcALZI/AAAAAAAABEQ/u1jO3ccqaJo/s1600/tumblr_lj7uznqRbX1qgrhjdo1_500.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifGemeos + ">";
  } else if (resposta == "boa sorte, charlie!") {
    var gifCharlie = "https://media4.giphy.com/media/ma7VlDSlty3EA/giphy.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifCharlie + ">";
  } else if (resposta == "a casa do mickey mouse") {
    var gifMickey = "https://media.tenor.com/images/cd00080ba0fd57ad0bce235519c96962/tenor.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifMickey + ">";
  } else if (resposta == "austin & ally") {
    var gifAustin = "https://m.gifmania.pt/Gifs-Animados-Walt-Disney/Imagens-Animadas-Disney-Series/Gif-Animados-Austin-Ally/Austin-Ally-91634.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifAustin + ">";
  } else if (resposta == "kick buttowski: um projeto de dublê") { 
    var gifKick = "https://i.pinimg.com/originals/1c/39/33/1c3933bbf90042d41dc340757b1f8805.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifKick + ">";
  } else if (resposta == "agentes da s.h.i.e.l.d. da marvel" ) {
    var gifShield = "https://i.pinimg.com/originals/20/05/fc/2005fc5831708673e9c26f6b03c269a9.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifShield + ">";
  } else if  (resposta == "agente carter da marvel") {
    var gifCarter = "https://i.pinimg.com/originals/79/b6/dd/79b6dd9bc29e911143bbf0051f2aa49c.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifCarter + ">";
  } else if  (resposta == "os simpsons") {
    var gifSimpsons = "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifSimpsons + ">";
  } else if  (resposta == "high school musical: a série: o musical") {
    var gifHigh = "https://media1.giphy.com/media/RhYKuYFcM2rsGpKkNj/giphy.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifHigh + ">";
  } else if(resposta == "fugitivos da marvel") {
    var gifFugitivos = "https://i.pinimg.com/originals/fb/af/5c/fbaf5cea43f6fe12a173a9e7f59eb62f.gif"
    document.getElementById('resultado').innerHTML = "<img src = " + gifFugitivos + ">";
  } else {
   document.getElementById('resultado').innerHTML = "O seu envio é inválido! :(";
  }
  document.getElementById("numero").focus();
  document.getElementById("numero").value = "";
}
