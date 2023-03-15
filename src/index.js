const express = require('express');
const {mongoose} = require("./database");
const cors = require("cors");
const equipos = require("./routes/equipos");
const laboratorios = require("./routes/laboratorios");
const eventos = require("./routes/eventos");
const certificados = require("./routes/certificados");


const app = express();
app.use(cors());
app.use(express.json());


//Cada una de las rutas
app.use("/equipos", equipos);
app.use("/laboratorios", laboratorios);
app.use("/eventos", eventos);
app.use("/certificados", certificados);

app.listen(process.env.PORT || 3000,() => {
    console.log(`Server Started at ${3001}`)
})

alert.apply('Connect')


module.exports = app;