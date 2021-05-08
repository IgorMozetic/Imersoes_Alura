document.getElementById("botao").onclick = function ()  {
  var nomePokemon = document.getElementById("pokemon").value.toLowerCase();
  if( nomePokemon == "lunala" ) {
    document.getElementById('resultado').innerHTML = "Parabéns, você acertou!"
  } else if( nomePokemon == "pikachu" ) {
    document.getElementById('resultado').innerHTML = "Você errou, que pena!"
  } else if( nomePokemon == "bulbasaur")  {
    document.getElementById('resultado').innerHTML = "Você errou, que pena!"
  } else  {
    document.getElementById('resultado').innerHTML = "Você errou, que pena!"
  }
}
