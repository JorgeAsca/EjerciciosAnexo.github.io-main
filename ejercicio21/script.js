document.getElementById("btnFiltrar").addEventListener("click", () => {
  const valor = Number(document.getElementById("valor").value);
  if (isNaN(valor)) {
    document.getElementById("salida").textContent = "Introduce un número válido.";
    return;
  }

  const numeros = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
  const filtrados = numeros.filter(n => n > valor);

  console.log("Array original:", numeros);
  console.log(`Números mayores que ${valor}:`, filtrados);

  document.getElementById("salida").textContent =
    `Array original: ${numeros.join(", ")}\nMayores que ${valor}: ${filtrados.join(", ")}`;
});
