// EJERCICIO 12: Filtrado de arrays - números pares
// Agregar evento click al botón
document.getElementById("btnFiltrar").addEventListener("click", () => {
  // Array con números del 1 al 10
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Mostrar array original en formato tabla
  console.table(numeros);

  // Filtrar solo los números pares usando filter() y operador módulo
  const pares = numeros.filter(num => num % 2 === 0);
  console.log("Números pares:", pares);
  // Mostrar los números pares unidos por comas
  document.getElementById("salida").textContent = `Números pares: [${pares.join(", ")}]`;
});
