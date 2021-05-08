function adicionarPodcast() {
  var resposta = [];
  var linkDoUsuario = document.querySelector('#resposta');
  resposta = linkDoUsuario.value;
  verificaLinkVideo(resposta);
  document.getElementById("resposta").focus();
  document.getElementById("resposta").value = "";
}

function verificaLinkVideo(resposta) {
  if (resposta.slice(0, 19) == "https://www.youtube") {
    var podcast = resposta.slice(32);
    listaPodcast(podcast);
    document.getElementById('resultado').innerHTML = "";
  } else if(resposta.slice(0, 16) == "https://youtu.be") {
    var podcast = resposta.slice(17);
    listaPodcast(podcast);
    document.getElementById('resultado').innerHTML = "";
  } else{
    document.getElementById('resultado').innerHTML = "Este Link é inválido!";
  }
}

function listaPodcast(podcast) {
  var listaPodcast = [];
  listaPodcast = document.querySelector('#listaPodcast');
  var link = '<iframe width="540" height="285" src="https://www.youtube.com/embed/' + podcast + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';
  listaPodcast.innerHTML = link + listaPodcast.innerHTML ;
}
