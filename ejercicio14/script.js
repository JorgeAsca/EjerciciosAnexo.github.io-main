document.getElementById("btnVerificar").addEventListener("click", () => {
  const palabra = document.getElementById("palabra").value.toLowerCase().replace(/\s+/g, "");
  if (palabra === "") {
    document.getElementById("salida").textContent = "Por favor ingresa una palabra.";
    return;
  }

  const invertida = palabra.split("").reverse().join("");
  const esPalindromo = palabra === invertida;

  console.log(`Palabra: "${palabra}" → Palíndromo: ${esPalindromo}`);
  document.getElementById("salida").textContent = esPalindromo
    ? `Sí "${palabra}" es un palíndromo.`
    : `No "${palabra}" no es un palíndromo.`;
});
