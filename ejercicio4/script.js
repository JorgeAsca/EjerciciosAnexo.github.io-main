document.getElementById("btnSumar").addEventListener("click", () => {
  const num1 = Number(prompt("Ingresa el primer número:"));
  const num2 = Number(prompt("Ingresa el segundo número:"));
  const suma = num1 + num2;

  console.log(`La suma de ${num1} + ${num2} es = ${suma}`);
  document.getElementById("resultado").innerHTML += `<p>Resultado: ${suma}</p>`;
});
