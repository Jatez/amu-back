const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Laboratorio = new Schema({
    nombre: { type: String, required: true},
    direccion: { type: String, required: true},
    telefono: { type: String, required: true}
});

module.exports = mongoose.model("Laboratorio",Laboratorio);