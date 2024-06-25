const form = document.getElementById("loginForm");
const user = document.getElementById("InputEmail");
const numero = document.getElementById("numero");
const email = document.getElementById("InputEmail");
const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const select = document.getElementById("miSelect");
  var opcion = select.value;

  if (user.value.length < 6) {
    alert("El nombre debe poseer al menos 6 caracteres");
  }
  if (numero.value.length > 8) {
    alert("El número debe poseer al menos 8 caracteres");
  }
  if (opcion == 0) {
    alert("Ingrese una opción válida en el menú Género");
  }
});

if (localStorage.getItem("user")) {
  // registo.innerHTML = user.email_user;
  // registo.href = "user.html";
  /*nuevoEnlace.textContent = user.email_user;
  nuevoElemento.appendChild(nuevoEnlace);
  nuevoElemento.classList.add("--bs-primary-text-emphasis");
  nuevoElemento.classList.add("nav-item");
  nuevoElemento.classList.add("nav-link");
  nuevoElemento.classList.add("mx-2");
  lista.appendChild(nuevoElemento);*/

  userLoged.classList.remove("invisible");
  userLoged.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.email_user;
  userName.appendChild(userName1);
}
