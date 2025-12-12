// Obtener el contenedor donde se mostrarán los enlaces de ejercicios
const lista = document.getElementById("lista-ejercicios");
// Definir el número total de ejercicios disponibles
const totalEjercicios = 21;

// Crear enlaces dinámicamente para cada ejercicio
for (let i = 1; i <= totalEjercicios; i++) {
  // Crear elemento de enlace
  const item = document.createElement("a");
  // Establecer la ruta al archivo HTML del ejercicio
  item.href = `./ejercicio${i}/index.html`;
  // Establecer el texto del enlace
  item.textContent = `Ejercicio ${i}`;
  // Añadir clase CSS para estilos
  item.classList.add("card");
  // Agregar el enlace al contenedor
  lista.appendChild(item);
}