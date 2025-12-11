document.getElementById("btnMayor").addEventListener("click", () => {
  const numeros = [12, 45, 7, 89, 23, 56, 90, 33];
  console.table(numeros);

  const mayor = Math.max(...numeros);
  console.log(`El número más grande es: ${mayor}`);
  document.getElementById("salida").textContent = `El número más grande es: ${mayor}`;
});
