// e --> enter
// o --> ober
// i --> imes 
// a --> ai
// u --> ufat

function encriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto masyuscula como minuscula -- e else
  //g es para toda la linea u oracio
  //m es para que afecte a multiples lineas o parrafo
  var textCifrado = texto.replace(/e/gi, "enter");
textCifrado = textCifrado.replace(/o/gi, "ober");
textCifrado = textCifrado.replace(/i/gi, "imes");
textCifrado = textCifrado.replace(/a/gi, "ai");
textCifrado = textCifrado.replace(/u/gi, "ufat");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textCifrado;
  document.getElementById("copiar").style.display = "inherit";

}
function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto masyuscula como minuscula -- e else
    //g es para toda la linea u oracio
    //m es para que afecte a multiples lineas o parrafo
    var textCifrado = texto.replace(/enter/gi, "e");
    textCifrado = textCifrado.replace(/ober/gi, "o");
    var textCifrado = textCifrado.replace(/imes/gi, "i");
    var textCifrado = textCifrado.replace(/ai/gi, "a");
    var textCifrado = textCifrado.replace(/ufat/gi, "u");

    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "inherit"
  }
  function copiar() {
    var contenido = document.querySelector("#texto2").textContent;
    var textarea = document.createElement("textarea");
    textarea.value = contenido;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Se copió");
  }
  
  

  
        
  