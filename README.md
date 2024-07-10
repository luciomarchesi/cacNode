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

  git clone https://github.com/luciomarchesi/cacNode.git

- ### Instala las dependencias

  npm install

- ### Inicia la aplicación

  npm run dev

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
  > ![Base](/assets/images/DB_Model.png)
- ✔️ A través del servidor levantado con Node y Express se debe poder realizar al menos un tipo de alta. (POST) Pts. 15
- ❌ De la misma forma se debe poder realizar modificaciones de los registros. (PUT) Pts. 15
- ✔️ Se debe poder acceder a los registros de la tabla (GET) Pts. 15
- ❌ Se debe poder realizar borrado físico de los datos. (DELETE) Pts. 15
- ❌ El trabajo práctico deberá subirse a un servidor online y compartirse mediante un repositorio de Git. (Mandatorio) Pts. 5
- ❌ La página deberá subirse a un servidor on-line para poder ser navegada por el Docente. (Mandatorio) Pts. 5
  https://cac-node.vercel.app/
  https://backend-mysql-express.vercel.app/

- ❌ Se valorará la aplicación de un token o método de autenticación. Pts. 5
- ✔️ El backend debe estar integrado con un frontend. Pts. 5
