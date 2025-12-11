document.getElementById("btnContar").addEventListener("click", () => {
  const frase = document.getElementById("frase").value.trim();
  if (frase === "") {
    document.getElementById("salida").textContent = "Por favor ingresa una frase.";
    return;
  }

  const palabras = frase.split(/\s+/);
  console.log(`Frase: "${frase}" → ${palabras.length} palabras`);
  document.getElementById("salida").textContent = `La frase tiene ${palabras.length} palabra(s).`;
});
