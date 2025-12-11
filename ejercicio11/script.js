document.getElementById("btnGenerar").addEventListener("click", () => {
  const numeros = [];
  for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 20) + 1);
  }

  const conteo = {};
  numeros.forEach(num => {
    conteo[num] = (conteo[num] || 0) + 1;
  });

  console.table(conteo);
  document.getElementById("salida").textContent = JSON.stringify(conteo, null, 2);
});
