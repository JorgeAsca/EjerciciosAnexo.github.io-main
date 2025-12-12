// EJERCICIO 11: Conteo de frecuencias en arrays
// Agregar evento click al botón
document.getElementById("btnGenerar").addEventListener("click", () => {
  // Crear array vacío para almacenar números
  const numeros = [];
  // Generar 100 números aleatorios entre 1 y 20
  for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 20) + 1);
  }

  // Crear objeto para contar las frecuencias
  const conteo = {};
  // Recorrer cada número y contar cuántas veces aparece
  numeros.forEach(num => {
    // Si el número ya existe, incrementar; si no, inicializar en 1
    conteo[num] = (conteo[num] || 0) + 1;
  });

  // Mostrar el conteo en formato tabla
  console.table(conteo);
  // Mostrar el resultado en la página con formato JSON legible
  document.getElementById("salida").textContent = JSON.stringify(conteo, null, 2);
});
