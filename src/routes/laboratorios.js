const { request } = require("express");
const express = require("express");
const router = express.Router();
const Laboratorio = require("../models/laboratorios");

router.get('/', async (req, res) => {
    const laboratorios = await Laboratorio.find();
    res.json(laboratorios);
});

router.get('/:id', async (req, res) => {
    const laboratorios = await Laboratorio.findById(req.params.id);
    res.json(laboratorios);
});

router.post('/', async (req, res) => {
    try {
        const laboratorios = await Laboratorio.create(req.body);
        res.json({ state: 200});
    } catch (error) {
        res.status(400).send("Error en la petición");
    }
});

router.put('/:id', async (req, res) => {
    await Laboratorio.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await Laboratorio.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;