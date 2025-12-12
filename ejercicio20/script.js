
document.getElementById("btnConvertir").addEventListener("click", () => {
  // Obtener el texto del input
  const texto = document.getElementById("texto").value;
  // Validar que no esté vacío
  if (texto.trim() === "") {
    document.getElementById("salida").textContent = "Por favor ingresa un texto.";
    return; // Salir si está vacío
  }

  // Convertir todo el texto a mayúsculas
  const mayus = texto.toUpperCase();
  // Convertir todo el texto a minúsculas
  const minus = texto.toLowerCase();

  console.log(`Texto original: ${texto}\nMAYÚSCULAS: ${mayus}\nminúsculas: ${minus}`);
  // Mostrar ambas conversiones en la página usando innerHTML para el <br>
  document.getElementById("salida").innerHTML =
    `Mayúsculas: ${mayus}<br> Minúsculas: ${minus}`;
});
