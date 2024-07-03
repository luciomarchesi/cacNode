const form = document.getElementById("loginForm");

const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = document.getElementById("inputName").value;
  const numero = document.getElementById("inputNumber").value;
  const select = document.getElementById("inputSelect").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("inputMessage").value;

  const selectElement = document.getElementById("inputSelect");
  var opcion = selectElement.value;

  if (user.length < 6) {
    alert("El nombre debe poseer al menos 6 caracteres");
    return;
  }
  if (numero.length < 8) {
    alert("El número debe poseer al menos 8 caracteres");
    return;
  }
  if (opcion == 0) {
    alert("Ingrese una opción válida en el menú Género");
    return;
  }
  //alert(user, numero, select, email, message);
  //console.log(user, numero, select, email, message);

  // Preparar los datos para enviar
  const datos = {
    nombre: user,
    numero_telefono: numero,
    genero: select,
    correo: email,
    texto_mensaje: message,
  };

  // Enviar los datos al servidor usando fetch
  try {
    const response = await fetch("https://cac-node.vercel.app/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      throw new Error("Error al enviar los datos");
    }
    form.reset();
    alert("Datos enviados correctamente");
    const data = await response.json();
    console.log("Respuesta del servidor:", data);
  } catch (error) {
    console.error("Error en la solicitud:", error);
    alert("Hubo un error al enviar los datos. Inténtelo de nuevo más tarde.");
  }
});

if (localStorage.getItem("user")) {
  userLoged.classList.remove("invisible");
  userLoged.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.email_user;
  userName.appendChild(userName1);
}
