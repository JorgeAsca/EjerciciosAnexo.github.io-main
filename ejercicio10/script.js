// EJERCICIO 10: Encontrar el valor máximo en un array
// Agregar evento click al botón
document.getElementById("btnMayor").addEventListener("click", () => {
  // Array predefinido con números
  const numeros = [12, 45, 7, 89, 23, 56, 90, 33];
  // Mostrar el array en formato tabla
  console.table(numeros);

  // Encontrar el número mayor usando Math.max() con spread operator (...)
  // El spread operator expande el array como argumentos individuales
  const mayor = Math.max(...numeros);
  console.log(`El número más grande es: ${mayor}`);
  document.getElementById("salida").textContent = `El número más grande es: ${mayor}`;
});
