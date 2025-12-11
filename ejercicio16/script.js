document.getElementById("btnConvertir").addEventListener("click", () => {
  const celsius = Number(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    document.getElementById("salida").textContent = "Introduce un valor numérico.";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
  document.getElementById("salida").textContent = `${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`;
});
