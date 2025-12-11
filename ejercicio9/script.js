document.getElementById("btnInvertir").addEventListener("click", () => {
  const texto = document.getElementById("texto").value;

  if (texto.trim() === "") {
    document.getElementById("salida").textContent = "Por favor, ingresa una cadena.";
    return;
  }

  const invertida = texto.split("").reverse().join("");
  console.log(`Cadena original: "${texto}" → Invertida: "${invertida}"`);
  document.getElementById("salida").textContent = `Cadena invertida: ${invertida}`;
});
