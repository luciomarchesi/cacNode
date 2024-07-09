let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let buyButton = document.querySelector(".buyButton"); // Selección del botón "Comprar"
const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [];
let listCards = [];

document.addEventListener("DOMContentLoaded", function () {
  fetch("/productos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      return response.json();
    })
    .then((data) => {
      products = data;
      products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
          <img src="${value.foto}">
          <div class="title">${value.nombre}</div>
          <div class="price">${value.precio}</div>
          <button onclick="addToCard(${key})">Agregar al Carrito</button>`;
        list.appendChild(newDiv);
      });
    })
    .catch((error) => {
      console.error("Error al cargar productos:", error.message);
      alert("Error al cargar productos");
    });

  buyButton.style.display = "none";
});

function addToCard(index) {
  console.log(listCards);
  if (listCards.length >= 4) {
    alert("¡No puedes agregar más de 4 productos al carrito!");
    return;
  }
  let existingItem = listCards.find((item) => item.id === products[index].id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    let newCartItem = {
      id: products[index].id,
      foto: products[index].foto,
      nombre: products[index].nombre,
      precio: products[index].precio,
      quantity: 1,
    };
    listCards.push(newCartItem);
  }

  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((product, index) => {
    totalPrice += product.precio * product.quantity;
    count += product.quantity;

    let newDiv = document.createElement("li");
    newDiv.innerHTML = `
      <div><img src="${product.foto}"/></div>
      <div>${product.nombre}</div>
      <div>${product.precio.toLocaleString()}</div>
      <div>
        <button onclick="changeQuantity(${index}, ${product.quantity - 1})">-</button>
        <div class="count">${product.quantity}</div>
        <button onclick="changeQuantity(${index}, ${product.quantity + 1})">+</button>
      </div>`;
    listCard.appendChild(newDiv);
  });

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;

  // Mostrar el botón "Comprar" si hay productos en el carrito
  if (listCards.length > 0) {
    buyButton.style.display = "block";
  } else {
    buyButton.style.display = "none";
  }

  localStorage.setItem("cart", JSON.stringify(listCards));
}

function changeQuantity(index, quantity) {
  if (quantity <= 0) {
    listCards.splice(index, 1);
  } else {
    listCards[index].quantity = quantity;
  }

  reloadCard();
}

buyButton.addEventListener("click", () => {
  let userId = userlogueado.userWithoutPassword.id;

  let data = {
    id_usuario: userId,
  };
  listCards.forEach((item, index) => {
    data[`id_producto_${index + 1}`] = item.id;
  });

  // Rellenar con null para los productos que no existan
  for (let i = listCards.length + 1; i <= 4; i++) {
    data[`id_producto_${i}`] = null;
  }
  console.log(JSON.stringify(data));

  fetch("/compras", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al procesar la compra");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Respuesta del servidor:", responseData);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir a una página de confirmación o mostrar un mensaje al usuario
      alert("Compra realizada correctamente");
      // Limpiar el carrito después de la compra
      listCards = [];
      reloadCard();
    })
    .catch((error) => {
      console.error("Error al procesar la compra:", error);
      alert("Error al procesar la compra. Por favor, inténtalo de nuevo más tarde.");
    });
});

if (localStorage.getItem("user")) {
  userLoged.classList.remove("invisible");
  userLoged.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.email_user;
  userName.appendChild(userName1);
}
