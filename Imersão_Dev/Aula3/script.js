var tentativas = 5;
var num = Math.floor(Math.random() * (100 - 10 + 1) + 10);
document.getElementById("botao").onclick = function ()  {
  var resposta = parseInt(document.getElementById("numero").value);
  if (tentativas > 1) {
    if (resposta == num)  {
      document.getElementById('resultadonum').innerHTML = "Correto! Parabéns, você é um(a) gênio(a) :)";
      } else if (resposta < num) {
        --tentativas;
        document.getElementById("resultadonum").innerHTML = "Errado! Dica: o número é maior :) Tentativas: " + tentativas;
      } else {
      --tentativas;
      document.getElementById("resultadonum").innerHTML = "Errado! Dica: o número é menor :) Tentativas: " + tentativas;
      } } else {
      document.getElementById("resultadonum").innerHTML = "Acabaram as tentativas :( O número era: " + num;  
   }
 document.getElementById("numero").focus();
 document.getElementById("numero").value = "";
  }
