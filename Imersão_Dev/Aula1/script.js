function conversao()  {
  var valorConversaoRealDolar =  parseFloat(document.getElementById("real").value.replace(",","."));
  var valorConvertidoDolar = ((valorConversaoRealDolar / 5.50).toFixed(2));
 // alert("O Valor do Dólar atual é: " + valorConvertidoDolar + " U$");//
  document.getElementById("resultadoRealDolar").innerHTML = valorConvertidoDolar + " U$";
}

function conversao2() {
  var valorConversaoDolarReal =  parseFloat(document.getElementById("dolar").value.replace(",","."));
  var valorConvertidoReal = ((valorConversaoDolarReal * 5.50).toFixed(2));
 // alert("O Valor do Real atual é: R$ " + valorConvertidoReal //
  document.getElementById("resultadoDolarReal").innerHTML =  " R$" + valorConvertidoReal ;
}
