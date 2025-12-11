document.getElementById("btnVer").addEventListener("click", () => {
  const persona = {
    nombre: "Laura",
    edad: 30,
    casado: false,
    hobbies: ["leer", "correr", "viajar"],
    direccion: { ciudad: "Barcelona", pais: "España" },
    contacto: {
      email: "laura@mail.com",
      telefono: "600123456"
    }
  };

  console.log("Objeto persona:");
  console.table(persona);
});
