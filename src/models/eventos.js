const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Evento = new Schema({
    agendada: { type: Boolean, required: true},
    estado: { type: String, required: true},
    fecha_agendada: { type: Date, required: true},
    tipo_evento: { type: String, required: true},
    codigo_equipo: { type: Schema.ObjectId, ref: "equipos" },
    codigo_laboratorio: { type: Schema.ObjectId, ref: "laboratorios" }
});

module.exports = mongoose.model("Evento",Evento);