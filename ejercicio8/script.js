document.getElementById("btnGenerar").addEventListener("click", () => {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById("salida").textContent = "Introduce un rango válido.";
    return;
  }

  const azar = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Número aleatorio entre ${min} y ${max}: ${azar}`);
  document.getElementById("salida").textContent = `Número aleatorio generado: ${azar}`;
});
