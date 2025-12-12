
document.getElementById("btnVerificar").addEventListener("click", () => {
  // Obtener palabra, convertir a minúsculas y eliminar espacios
  const palabra = document.getElementById("palabra").value.toLowerCase().replace(/\s+/g, "");
  // Validar que no esté vacía
  if (palabra === "") {
    document.getElementById("salida").textContent = "Por favor ingresa una palabra.";
    return; // Salir si está vacía
  }

  // Crear la versión invertida de la palabra
  const invertida = palabra.split("").reverse().join("");
  // Comparar si la palabra original es igual a la invertida
  const esPalindromo = palabra === invertida;

  console.log(`Palabra: "${palabra}" → Palíndromo: ${esPalindromo}`);
  // Mostrar resultado usando operador ternario
  document.getElementById("salida").textContent = esPalindromo
    ? `Sí "${palabra}" es un palíndromo.`
    : `No "${palabra}" no es un palíndromo.`;
});
