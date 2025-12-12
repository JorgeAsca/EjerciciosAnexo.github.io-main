// EJERCICIO 19: Cálculo del promedio de un array
// Agregar evento click al botón
document.getElementById("btnPromedio").addEventListener("click", () => {
  // Generar array de 10 números aleatorios entre 0 y 99
  const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  // Calcular la suma usando reduce() - acumula todos los valores
  // acc es el acumulador, num es el valor actual, 0 es el valor inicial
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  // Calcular el promedio dividiendo la suma entre la cantidad de elementos
  const promedio = suma / numeros.length;

  console.log("Array:", numeros);
  console.log("Promedio:", promedio);

  // Mostrar los números y el promedio con 2 decimales
  document.getElementById("salida").textContent =
    `Números: ${numeros.join(", ")}\nPromedio: ${promedio.toFixed(2)}`;
});
