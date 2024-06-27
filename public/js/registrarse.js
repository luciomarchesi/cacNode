const form = document.getElementById("loginForm");
const user = document.getElementById("InputEmail");
const pass = document.getElementById("InputPassword");

const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");

// Expresión regular para validar un correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Expresión regular para validar contraseña
/*
Al menos 8 caracteres de longitud.
Al menos una letra mayúscula.
Al menos un carácter especial. 
Al meenos un numero del 0 al 9
*/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

user.focus();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!emailRegex.test(user.value)) {
    alert("Por favor, introduce un correo electrónico válido");
  } else if (!passwordRegex.test(pass.value)) {
    alert(
      "La contraseña debe poseer minimo 8 caracteres, al menos una letra mayúscula, al menos un carácter especial y al menos un numero del 0 al 9"
    );
    return false;
  } else {
    console.log(user.value.trim());
    console.log(pass.value);
    const datos = {
      correo: user.value.trim(),
      pass: pass.value,
    };
    const response = await fetch("http://127.0.0.1:3000/usuarios", {
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
    alert("credenciales correctas");
    window.location.href = "login.html";
  }
});

if (localStorage.getItem("user")) {
  userLoged.classList.remove("invisible");
  userLoged.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.email_user;
  userName.appendChild(userName1);
}
