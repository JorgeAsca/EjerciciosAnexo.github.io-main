function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

document.getElementById("btnPrimos").addEventListener("click", () => {
  const limite = Number(document.getElementById("limite").value);
  if (isNaN(limite) || limite < 2) {
    document.getElementById("salida").textContent = "Introduce un número mayor o igual a 2.";
    return;
  }

  const primos = [];
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) primos.push(i);
  }

  console.log(`Números primos hasta ${limite}:`, primos);
  document.getElementById("salida").textContent = `Números primos hasta ${limite}:\n${primos.join(", ")}`;
});
