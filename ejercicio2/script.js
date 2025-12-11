document.getElementById("btnMostrar").addEventListener("click", () => {
  const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
  console.table(numeros);

  const filtrados = numeros.filter(n => n >= 50 && n <= 80);
  console.log("Números entre 50 y 80:");
  console.table(filtrados);
});
