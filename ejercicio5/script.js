document.getElementById("btnVerificar").addEventListener("click", () => {
  const numero = Number(prompt("Ingresa un número:"));

  if (isNaN(numero)) {
    alert("Por favor ingresa un número válido.");
    return;
  }

  const mensaje = numero % 2 === 0 ? "El número es PAR" : "El número es IMPAR";
  console.log(mensaje);
  document.getElementById("resultado").innerHTML += `<p>${mensaje}</p>`;
});
