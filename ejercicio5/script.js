// EJERCICIO 5: Condicionales y operador ternario
// Agregar evento click al botón
document.getElementById("btnVerificar").addEventListener("click", () => {
  // Solicitar un número al usuario
  const numero = Number(prompt("Ingresa un número:"));

  // Validar que el valor ingresado sea un número válido
  if (isNaN(numero)) {
    alert("Por favor ingresa un número válido.");
    return; // Salir de la función si no es válido
  }

  // Usar operador ternario para determinar si es par o impar
  // El operador % (módulo) devuelve el resto de la división
  const mensaje = numero % 2 === 0 ? "El número es PAR" : "El número es IMPAR";
  console.log(mensaje);
  // Mostrar el resultado en la página
  document.getElementById("resultado").innerHTML += `<p>${mensaje}</p>`;
});
