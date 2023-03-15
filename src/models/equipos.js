const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Equipo = new Schema({
    serie: { type: String, required: true},
    nombre_especifico: { type: String, required: true},
    nombre_generico: { type: String, required: true},
    marca: { type: String, required: true},
    modelo: { type: String, required: true},
    fecha_ultima_actividad: { type: Date, required: true},
    estado: { type: String, required: true}
});

module.exports = mongoose.model("Equipo",Equipo);