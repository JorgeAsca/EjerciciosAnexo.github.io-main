
function esPrimo(num) {
  // Los números menores a 2 no son primos
  if (num < 2) return false;
  // Verificar divisibilidad desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Si es divisible por algn número, no es primo
    if (num % i === 0) return false;
  }
  // Si no es divisible por ningún número, es primo
  return true;
}

// Agregar evento click al botón
document.getElementById("btnPrimos").addEventListener("click", () => {
  // Obtener el límite del input
  const limite = Number(document.getElementById("limite").value);
  // Validar que sea un número válido y mayor o igual a 2
  if (isNaN(limite) || limite < 2) {
    document.getElementById("salida").textContent = "Introduce un número mayor o igual a 2.";
    return; // Salir si no es válido
  }

  // Array para almacenar los números primos encontrados
  const primos = [];
  // Recorrer desde 2 hasta el límite
  for (let i = 2; i <= limite; i++) {
    // Si el número es primo, agregarlo al array
    if (esPrimo(i)) primos.push(i);
  }

  console.log(`Números primos hasta ${limite}:`, primos);
  document.getElementById("salida").textContent = `Números primos hasta ${limite}:\n${primos.join(", ")}`;
});
