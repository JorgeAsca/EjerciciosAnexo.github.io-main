
document.getElementById("btnInvertir").addEventListener("click", () => {
  // Obtener el texto del input
  const texto = document.getElementById("texto").value;

  // Validar que el texto no esté vacío (trim() elimina espacios)
  if (texto.trim() === "") {
    document.getElementById("salida").textContent = "Por favor, ingresa una cadena.";
    return; // Salir si está vacío
  }

  // Invertir la cadena: split() convierte a array, reverse() invierte, join() une
  const invertida = texto.split("").reverse().join("");
  console.log(`Cadena original: "${texto}" → Invertida: "${invertida}"`);
  document.getElementById("salida").textContent = `Cadena invertida: ${invertida}`;
});
