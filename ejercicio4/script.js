
document.getElementById("btnSumar").addEventListener("click", () => {
  // Solicitar dos números al usuario usando prompt()
  const num1 = Number(prompt("Ingresa el primer número:"));
  const num2 = Number(prompt("Ingresa el segundo número:"));
  // Realizar la suma de los dos números
  const suma = num1 + num2;

  // Mostrar el resultado en la consola usando template literals
  console.log(`La suma de ${num1} + ${num2} es = ${suma}`);
  // Mostrar el resultado en la página web
  document.getElementById("resultado").innerHTML += `<p>Resultado: ${suma}</p>`;
});
