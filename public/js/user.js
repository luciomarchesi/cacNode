const userlogueado = JSON.parse(localStorage.getItem("user"));
let userLogedi = document.getElementById("dropdown");
const userNameID = document.getElementById("userName");
const userCardTitle = document.querySelector(".card-title");
const userCardCorreo = document.querySelector(".correo");
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
  userCardName.textContent = `Nombre: ${userlogueado.userWithoutPassword.nombre}`;
  userCardCreateAt.textContent = `Creado: ${userlogueado.userWithoutPassword.createAt}`;
  userCardUpdateAt.textContent = `Actualizado: ${userlogueado.userWithoutPassword.updateAt}`;
  userCardUserId.textContent = `ID: ${userlogueado.userWithoutPassword.id}`;
}
