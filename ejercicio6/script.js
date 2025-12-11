document.getElementById("btnComprobar").addEventListener("click", () => {
  const numero = Number(document.getElementById("numeroInput").value);

  if (isNaN(numero)) {
    document.getElementById("salida").textContent = "Por favor ingresa un número válido.";
    return;
  }

  const mensaje = numero % 2 === 0 ? "El número es PAR" : "El número es IMPAR";
  console.log(mensaje);
  document.getElementById("salida").textContent = mensaje;
});
