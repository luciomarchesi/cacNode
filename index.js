/*--------SERVIDOR ESTATICO CON EXPRESS-------*/
let port = 3000;
//requiero el modulo de express y lo guardo en variable express
const express = require("express");
//inicializo express
const app = express();
const usuariosRouter = require("./src/routes/usuarios");
const path = require("path");

app.use(express.json());

app.use("/usuarios", usuariosRouter);

/*
app.get('/', (req,res) => 
{
    res.send('HOLA DESDE EL PUERTO LOCALHOST:3000');
});
*/

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puert ${port}`);
});
