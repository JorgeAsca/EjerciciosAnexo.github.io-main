document.getElementById("btnOrdenar").addEventListener("click", () => {
  const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  console.log("Array original:", numeros);

  const ordenado = [...numeros].sort((a, b) => a - b);
  console.log("Array ordenado:", ordenado);

  document.getElementById("salida").textContent =
    `Original: ${numeros.join(", ")}\nOrdenado: ${ordenado.join(", ")}`;
});
