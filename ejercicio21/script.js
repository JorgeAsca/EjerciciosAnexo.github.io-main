// EJERCICIO 21: Filtrado de arrays con condición personalizada
// Agregar evento click al botón
document.getElementById("btnFiltrar").addEventListener("click", () => {
  // Obtener el valor de referencia del input
  const valor = Number(document.getElementById("valor").value);
  // Validar que sea un número válido
  if (isNaN(valor)) {
    document.getElementById("salida").textContent = "Introduce un número válido.";
    return; // Salir si no es válido
  }

  // Generar array de 15 números aleatorios entre 0 y 99
  const numeros = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
  // Filtrar solo los números mayores que el valor ingresado
  const filtrados = numeros.filter(n => n > valor);

  console.log("Array original:", numeros);
  console.log(`Números mayores que ${valor}:`, filtrados);

  // Mostrar tanto el array original como los números filtrados
  document.getElementById("salida").textContent =
    `Array original: ${numeros.join(", ")}\nMayores que ${valor}: ${filtrados.join(", ")}`;
});
