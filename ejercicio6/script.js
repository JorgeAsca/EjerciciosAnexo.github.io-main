
document.getElementById("btnComprobar").addEventListener("click", () => {
  // Obtener el valor del input HTML y convertirlo a número
  const numero = Number(document.getElementById("numeroInput").value);

  // Validar que el valor sea un número válido
  if (isNaN(numero)) {
    document.getElementById("salida").textContent = "Por favor ingresa un número válido.";
    return; // Salir si no es válido
  }

  // Determinar si el número es par o impar usando el operador módulo
  const mensaje = numero % 2 === 0 ? "El número es PAR" : "El número es IMPAR";
  console.log(mensaje);
  // Mostrar el resultado en el elemento de salida
  document.getElementById("salida").textContent = mensaje;
});
