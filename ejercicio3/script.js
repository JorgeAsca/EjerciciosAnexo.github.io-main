// EJERCICIO 3: Objetos complejos y anidados
// Agregar evento click al botón
document.getElementById("btnVer").addEventListener("click", () => {
  // Crear objeto complejo con propiedades de diferentes tipos
  const persona = {
    nombre: "Laura",                                    // Propiedad string
    edad: 30,                                          // Propiedad number
    casado: false,                                     // Propiedad boolean
    hobbies: ["leer", "correr", "viajar"],             // Propiedad array
    direccion: { ciudad: "Barcelona", pais: "España" }, // Objeto anidado
    contacto: {                                        // Otro objeto anidado
      email: "laura@mail.com",
      telefono: "600123456"
    }
  };

  console.log("Objeto persona:");
  // Mostrar el objeto en formato tabla para mejor visualización
  console.table(persona);
});
