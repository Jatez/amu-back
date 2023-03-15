const { request } = require("express");
const express = require("express");
const router = express.Router();
const Evento = require("../models/eventos");

router.get('/', async (req, res) => {
    const Eventos = await Evento.find();
    res.json(Eventos);
});

router.get('/:id', async (req, res) => {
    const Eventos = await Evento.findById(req.params.id);
    res.json(Eventos);
});

router.post('/', async (req, res) => {
    try {
        const Eventos = await Evento.create(req.body);
        res.json({ state: 200 + ' Ok' , data:Eventos});
    } catch (error) {
        res.status(400).send("Error en la petición");
    }
});

router.put('/:id', async (req, res) => {
    await Evento.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await Evento.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;