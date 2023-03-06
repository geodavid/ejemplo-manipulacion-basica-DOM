// Obtener el botón "Calcular" y agregar un evento click
document.getElementById("btnCalcular").addEventListener("click", function(){
    // Obtener los valores de los inputs y convertirlos a números
    var num1 = parseFloat(document.getElementById("calculo1").value);
    var num2 = parseFloat(document.getElementById("calculo2").value);
    
    // Sumar los dos números
    var resultado = num1 + num2;
    
    // Agregar el resultado al párrafo con id "result"
    document.getElementById("result").innerHTML = "El resultado es: " + resultado;
  });