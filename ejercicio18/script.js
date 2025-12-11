document.getElementById("btnBuscar").addEventListener("click", () => {
  const frase = document.getElementById("frase").value.trim();
  if (frase === "") {
    document.getElementById("salida").textContent = "Por favor ingresa una frase.";
    return;
  }

  const palabras = frase.split(/\s+/);
  let palabraLarga = "";

  for (let palabra of palabras) {
    if (palabra.length > palabraLarga.length) palabraLarga = palabra;
  }

  console.log(`Palabra más larga: ${palabraLarga}`);
  document.getElementById("salida").textContent = `La palabra más larga es: "${palabraLarga}"`;
});
