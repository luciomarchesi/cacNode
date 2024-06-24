/*--------SERVIDOR ESTATICO CON EXPRESS-------*/
let port = 3000;
//requiero el modulo de express y lo guardo en variable express
const express = require("express");
//inicializo express
const app = express();
const usuariosRouter = require("./src/routes/usuariosRoutes");
const contactoRouter = require("./src/routes/contactoRoutes");
const posteoRouter = require("./src/routes/posteoRouter");
const path = require("path");

app.use(express.json());

app.use("/usuarios", usuariosRouter);
app.use("/contacto", contactoRouter);
app.use("/posteos", posteoRouter);

/*
app.get('/', (req,res) => 
{
    res.send('HOLA DESDE EL PUERTO LOCALHOST:3000');
});
*/

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el http://localhost:${port}`);
});
