// EJERCICIO 2: Arrays y filtrado de datos
// Agregar evento click al botón
document.getElementById("btnMostrar").addEventListener("click", () => {
  // Generar array de 100 números aleatorios entre 1 y 100
  const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
  // Mostrar el array completo en formato tabla
  console.table(numeros);

  // Filtrar números que estén entre 50 y 80 (inclusive)
  const filtrados = numeros.filter(n => n >= 50 && n <= 80);
  console.log("Números entre 50 y 80:");
  // Mostrar los números filtrados en formato tabla
  console.table(filtrados);
});
