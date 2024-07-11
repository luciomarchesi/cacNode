document.addEventListener("DOMContentLoaded", () => {
  const userlogueado = JSON.parse(localStorage.getItem("user"));
  const userLogedi = document.getElementById("dropdown");
  const userNameID = document.getElementById("userName");
  const userCardTitle = document.getElementById("card-title");
  const userCardCorreo = document.getElementById("usuarioCorreo");

  if (userlogueado) {
    userLogedi.classList.remove("invisible");
    userLogedi.classList.add("visible");
    var userName1 = document.createElement("p");
    userName1.textContent = userlogueado.correo;
    userNameID.appendChild(userName1);

    userCardTitle.textContent = "Bienvenido";
    userCardCorreo.textContent = `Correo electrónico: ${userlogueado.userWithoutPassword.correo}`;
    var userId = userlogueado.userWithoutPassword.id;
  }

  document.getElementById("btnEliminar").addEventListener("click", async () => {
    try {
      const response = await fetch(`https://backend-mysql-express.vercel.app/usuarios/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Usuario eliminado exitosamente");

        localStorage.removeItem("user");
        window.location.href = "../index.html";
      } else {
        const errorText = await response.text();
        console.log(errorText);
        alert(`Error al eliminar el usuario: ${errorText}`);
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      alert("Ocurrió un error al eliminar el usuario");
    }
  });

  document.getElementById("updateForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nuevoCorreo = document.getElementById("nuevo_correo").value;
    const nuevaPass = document.getElementById("nuevo_pass").value;

    // Configura los datos para la petición PUT
    fetch(`https://backend-mysql-express.vercel.app/usuarios/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: nuevoCorreo,
        password: nuevaPass,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Éxito:", data);
        alert("Datos actualizados exitosamente");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al actualizar los datos");
      });
  });
});
