// EJERCICIO 7: Bucles y manipulación de strings
// Agregar evento click al botón
document.getElementById("btnContar").addEventListener("click", () => {
  // Obtener la palabra del input y convertirla a minúsculas
  const palabra = document.getElementById("palabra").value.toLowerCase();
  // Definir array con las vocales
  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0; // Inicializar contador

  // Recorrer cada letra de la palabra usando for...of
  for (let letra of palabra) {
    // Verificar si la letra actual es una vocal
    if (vocales.includes(letra)) contador++; // Incrementar contador
  }

  // Mostrar resultado en consola y en la página
  console.log(`La palabra "${palabra}" tiene ${contador} vocal(es).`);
  document.getElementById("salida").textContent = `La palabra "${palabra}" tiene ${contador} vocal(es).`;
});
