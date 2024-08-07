```
Nombre del Proyecto:
"LA COCINA DE JUAN"
Una breve descripción de lo que hace el proyecto:
Este proyecto representa el trabajo final del curso de  "FullStack - NodeJs"  de Codo a codo
En este proyecto te encontraras con un front statico que contiene una paginas de recetas, para implementar el backend y convertir la pagina estatica a una dinamica, implementamos, formulario de contacto, registro de usuario, login y un carrito de compras.
```

Instalación
Instrucciones sobre cómo instalar y configurar tu proyecto localmente. Por ejemplo:

- ### Clona el repositorio

  > git clone https://github.com/luciomarchesi/cacNode.git

- ### Instala las dependencias

  > npm install

- ### Inicia la aplicación

  > npm run dev

- ### Contribuciones

> @JLG777
> @LUCIOMARCHESI

---

## Criterios de evaluación

- ✔️ La base de datos debe desarrollarse con MySQL, tener al menos 4 tablas, con al menos 4 diferentes tipos de datos. Pts. 10

```
La base de datos consta de 5 tablas:
- Usuarios
- Contacto
- Productos
- Usuario_Productos
- Posteos (No implementada)

Los tipos de datos utilizados son:
* Integer
* Date
* Decimal
* Varchar
* Emun
* Text
```

- ✔️ Entre las tablas al menos deberá haber una relación “uno a muchos”. Pts. 10
  > La relacion uno a muchos se establece en las tablas usuario => usuario_productos => productos
  > ![Base](/public/assets/img/DB_Model.png)
- ✔️ A través del servidor levantado con Node y Express se debe poder realizar al menos un tipo de alta. (POST) Pts. 15

  > Se puede realizar un **POST** https://cac-node.vercel.app/usuarios

```json
{
  "correo": "ejemplo@prueba.com",
  "pass": "contraseña_segura",
  "avatar": "No Funcionando"
}
```

- ✔️ De la misma forma se debe poder realizar modificaciones de los registros. (PUT) Pts. 15

  > Se puede realizar un **PUT** de usuario https://cac-node.vercel.app/pages/user.html

- ✔️ Se debe poder acceder a los registros de la tabla (GET) Pts. 15

  > Se puede realizar un **GET** https://cac-node.vercel.app/productos

- ✔️ Se debe poder realizar borrado físico de los datos. (DELETE) Pts. 15

  > Se puede realizar un **DELETE** de usuario https://cac-node.vercel.app/pages/user.html

- ✔️ El trabajo práctico deberá subirse a un servidor online y compartirse mediante un repositorio de Git. (Mandatorio) Pts. 5

  - https://github.com/luciomarchesi/cacNode.git
  - https://github.com/jlg777/backend_mysql_express

- ✔️ La página deberá subirse a un servidor on-line para poder ser navegada por el Docente. (Mandatorio) Pts. 5

  - https://cac-node.vercel.app/
  - https://backend-mysql-express.vercel.app/

- ✔️ Se valorará la aplicación de un token o método de autenticación. Pts. 5

  > La aplicaion usa JWT.

- ✔️ El backend debe estar integrado con un frontend. Pts. 5

  > En el backend se encuentra la carpeta public con el frontend completo del curso de codo a codo.
