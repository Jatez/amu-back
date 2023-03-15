const { request } = require("express");
const express = require("express");
const router = express.Router();
const Certificado = require("../models/certificados");

router.get('/', async (req, res) => {
    const Certificados = await Certificado.find();
    res.json(Certificados);
});

router.get('/:id', async (req, res) => {
    const Certificados = await Certificado.findById(req.params.id);
    res.json(Certificados);
});

router.post('/', async (req, res) => {
    try {
        const Certificados = await Certificado.create(req.body);
        res.json({ state: 200 + ' Ok' , data:Certificados});
    } catch (error) {
        res.status(400).send("Error en la petición");
    }
});

router.put('/:id', async (req, res) => {
    await Certificado.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await Certificado.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;