function suma() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    document.getElementById("resultado").textContent = resultado;
  }
  
  function resta() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = resultado;
  }
  
  function multiplicacion() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 * numero2;
    document.getElementById("resultado").textContent = resultado;
  }
  
  function division() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 / numero2;
    document.getElementById("resultado").textContent = resultado;
  }  