document.getElementById("btnConvertir").addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  if (texto.trim() === "") {
    document.getElementById("salida").textContent = "Por favor ingresa un texto.";
    return;
  }

  const mayus = texto.toUpperCase();
  const minus = texto.toLowerCase();

  console.log(`Texto original: ${texto}\nMAYÚSCULAS: ${mayus}\nminúsculas: ${minus}`);
  document.getElementById("salida").innerHTML =
    `Mayúsculas: ${mayus}<br> Minúsculas: ${minus}`;
});
