const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Certificado = new Schema({
    numero_certificado: { type: Number, required: true},
    titulo: { type: String, required: true},
    observacion: { type: String, required: true},
    codigo_evento: { type: Schema.ObjectId, ref: "eventos" }
});

module.exports = mongoose.model("Certificado",Certificado);