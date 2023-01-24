function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //i para afectar minusculas y mayusculas 
    //g afecta en lo general el texto 
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";

    document.querySelector("#texto2").style.backgroundColor = "#F3F5FC";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";

    document.querySelector("#texto2").style.backgroundColor = "#F3F5FC";
  }
  
  function copia() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copied!");
  }

  const error = () => {
    document.getElementsByClassName("adv").style.color = "red"
    document.getElementsByClassName("adv").style.fontSize = "16px"
  }

  function cambiarColor() {
    document.querySelector("#texto2").style.backgroundColor = "blue";
}