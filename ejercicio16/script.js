
document.getElementById("btnConvertir").addEventListener("click", () => {
  // Obtener el valor en Celsius del input
  const celsius = Number(document.getElementById("celsius").value);
  // Validar que sea un número válido
  if (isNaN(celsius)) {
    document.getElementById("salida").textContent = "Introduce un valor numérico.";
    return; // Salir si no es válido
  }

  // Aplicar la fórmula de conversión: F = (C * 9/5) + 32
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
  // Mostrar resultado con 2 decimales usando toFixed()
  document.getElementById("salida").textContent = `${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`;
});
