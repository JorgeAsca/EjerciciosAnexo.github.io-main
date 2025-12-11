const lista = document.getElementById("lista-ejercicios");
    const totalEjercicios = 21;

    for (let i = 1; i <= totalEjercicios; i++) {
      const item = document.createElement("a");
      item.href = `./ejercicio${i}/index.html`;
      item.textContent = `Ejercicio ${i}`;
      item.classList.add("card");
      lista.appendChild(item);
    }