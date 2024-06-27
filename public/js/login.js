const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");
var user1 = document.getElementById("InputEmail");

user1.focus();

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente

  var user = document.getElementById("InputEmail").value;
  var pass = document.getElementById("InputPassword").value;

  if (user.length < 6) {
    alert("El nombre debe poseer al menos 6 caracteres");
    document.getElementById("InputEmail").focus();
    return; // Detiene la ejecución del código si la validación falla
  }

  if (pass.length < 8) {
    alert("La contraseña debe poseer al menos 8 caracteres");
    document.getElementById("InputPassword").focus();
    return; // Detiene la ejecución del código si la validación falla
  }

  const userData = {
    correo: user,
    pass: pass,
  };

  fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Usuario o contraseña incorrectos");
      }
      return response.json();
    })
    .then((data) => {
      // Manejar la respuesta del servidor
      console.log("Usuario autenticado:", data);
      localStorage.setItem("user", JSON.stringify(data)); // Guardar el usuario en el almacenamiento local
      window.location.href = "../index.html"; // Redirigir al usuario a la página principal
    })
    .catch((error) => {
      alert(error.message); // Mostrar un mensaje de error si la autenticación falla
    });
});

if (localStorage.getItem("user")) {
  userLoged.classList.remove("invisible");
  userLoged.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.correo;
  userName.appendChild(userName1);
}
