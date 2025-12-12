// EJERCICIO 18: Encontrar la palabra más larga en una frase
// Agregar evento click al botón
document.getElementById("btnBuscar").addEventListener("click", () => {
  // Obtener la frase del input y eliminar espacios extra
  const frase = document.getElementById("frase").value.trim();
  // Validar que no esté vacía
  if (frase === "") {
    document.getElementById("salida").textContent = "Por favor ingresa una frase.";
    return; // Salir si está vacía
  }

  // Dividir la frase en palabras
  const palabras = frase.split(/\s+/);
  let palabraLarga = ""; // Variable para almacenar la palabra más larga

  // Recorrer cada palabra para encontrar la más larga
  for (let palabra of palabras) {
    // Si la palabra actual es más larga que la guardada, reemplazarla
    if (palabra.length > palabraLarga.length) palabraLarga = palabra;
  }

  console.log(`Palabra más larga: ${palabraLarga}`);
  document.getElementById("salida").textContent = `La palabra más larga es: "${palabraLarga}"`;
});
