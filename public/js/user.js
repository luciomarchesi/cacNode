const userlogueado = JSON.parse(localStorage.getItem("user"));
let userLogedi = document.getElementById("dropdown");
const userNameID = document.getElementById("userName");
const userCardTitle = document.getElementById("card-title");
const userCardCorreo = document.getElementById("usuarioCorreo");
const userCardName = document.querySelector(".name");
const userCardCreateAt = document.querySelector(".createAt");
const userCardUpdateAt = document.querySelector(".updateAt");
const userCardUserId = document.querySelector(".userid");

if (localStorage.getItem("user")) {
  userLogedi.classList.remove("invisible");
  userLogedi.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.correo;
  userNameID.appendChild(userName1);

  userCardTitle.textContent = "Bienvenido";
  userCardCorreo.textContent = `Correo electrónico: ${userlogueado.userWithoutPassword.correo}`;
}

document.getElementById("btnEliminar").addEventListener("click", async () => {
  const userId = userlogueado.userWithoutPassword.id;
  console.log(userId);
  /*try {
    const response = await fetch(
      `http://localhost:3000/api/usuarios/${userId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Usuario eliminado exitosamente");
      // Opcionalmente, puedes redirigir al usuario o realizar otra acción
      localStorage.removeItem("user");
      window.location.href = "/";
    } else {
      alert("Error al eliminar el usuario");
    }
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    alert("Ocurrió un error al eliminar el usuario");
  }*/
});
