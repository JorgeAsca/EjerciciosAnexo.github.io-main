
document.getElementById("btnGenerar").addEventListener("click", () => {
  // Obtener los valores mínimo y máximo del formulario
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  // Validar que los valores sean números válidos y que min no sea mayor que max
  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById("salida").textContent = "Introduce un rango válido.";
    return; // Salir si la validación falla
  }

  // Generar número aleatorio en el rango especificado
  // Math.random() genera entre 0 y 1, se multiplica por el rango y se suma el mínimo
  const azar = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Número aleatorio entre ${min} y ${max}: ${azar}`);
  document.getElementById("salida").textContent = `Número aleatorio generado: ${azar}`;
});
