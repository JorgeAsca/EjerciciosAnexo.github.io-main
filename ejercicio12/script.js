document.getElementById("btnFiltrar").addEventListener("click", () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.table(numeros);

  const pares = numeros.filter(num => num % 2 === 0);
  console.log("Números pares:", pares);
  document.getElementById("salida").textContent = `Números pares: [${pares.join(", ")}]`;
});
