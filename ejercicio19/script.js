document.getElementById("btnPromedio").addEventListener("click", () => {
  const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const promedio = suma / numeros.length;

  console.log("Array:", numeros);
  console.log("Promedio:", promedio);

  document.getElementById("salida").textContent =
    `Números: ${numeros.join(", ")}\nPromedio: ${promedio.toFixed(2)}`;
});
