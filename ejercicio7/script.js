document.getElementById("btnContar").addEventListener("click", () => {
  const palabra = document.getElementById("palabra").value.toLowerCase();
  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let letra of palabra) {
    if (vocales.includes(letra)) contador++;
  }

  console.log(`La palabra "${palabra}" tiene ${contador} vocal(es).`);
  document.getElementById("salida").textContent = `La palabra "${palabra}" tiene ${contador} vocal(es).`;
});
