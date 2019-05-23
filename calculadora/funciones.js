/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById('reset');
    var raiz = document.getElementById('raiz');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var cuadrado = document.getElementById('cuadrado');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //eventos 
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function (e) {
        resetear();
    }
    
     suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }
    cuadrado.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "Math.pow";
      limpiar();
  }
     raiz.onclick = function (e){
              //  resultado.textContent = resultado.textContent + "√";
		operandoa = resultado.textContent;
                 operacion = "Math.sqrt";
                  limpiar();
	}
  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
  }
      punto.onclick = function (e) {
        resultado.textContent = resultado.textContent + ".";
    }
 

  function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
  function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    case "Math.sqrt":
      res = Math.sqrt(parseFloat(operandob));
      break;
    case "Math.pow":
      res = Math.pow(operandoa, 2);  
      break;
  }
  resetear();
  resultado.textContent = res;
}

}

