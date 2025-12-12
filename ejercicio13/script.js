
document.getElementById("btnContar").addEventListener("click", () => {
  // Obtener la frase del input y eliminar espacios al inicio y final
  const frase = document.getElementById("frase").value.trim();
  // Validar que la frase no esté vacía
  if (frase === "") {
    document.getElementById("salida").textContent = "Por favor ingresa una frase.";
    return; // Salir si está vacía
  }

  // Dividir la frase en palabras usando expresión regular que detecta espacios
  // \s+ significa uno o más espacios en blanco
  const palabras = frase.split(/\s+/);
  console.log(`Frase: "${frase}" → ${palabras.length} palabras`);
  document.getElementById("salida").textContent = `La frase tiene ${palabras.length} palabra(s).`;
});
