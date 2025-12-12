// EJERCICIO 17: Ordenamiento de arrays
// Agregar evento click al botón
document.getElementById("btnOrdenar").addEventListener("click", () => {
  // Generar array de 10 números aleatorios entre 0 y 99
  const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  console.log("Array original:", numeros);

  // Crear copia del array y ordenarla de menor a mayor
  // Se usa spread operator (...) para no modificar el array original
  // La función (a, b) => a - b ordena numéricamente
  const ordenado = [...numeros].sort((a, b) => a - b);
  console.log("Array ordenado:", ordenado);

  // Mostrar ambos arrays en la página
  document.getElementById("salida").textContent =
    `Original: ${numeros.join(", ")}\nOrdenado: ${ordenado.join(", ")}`;
});
