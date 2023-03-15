const { request } = require("express");
const express = require("express");
const router = express.Router();
const Equipo = require("../models/equipos");

router.get('/', async (req, res) => {
    const equipos = await Equipo.find();
    res.json(equipos);
});

router.get('/:id', async (req, res) => {
    const equipos = await Equipo.findById(req.params.id);
    res.json(equipos);
});

router.post('/', async (req, res) => {
    try {
        const equipos = await Equipo.create(req.body);
        res.json({ state: 200 + ' Ok' , data:equipos});
    } catch (error) {
        res.status(400).send("Error en la petición");
    }
});

router.put('/:id', async (req, res) => {
    await Equipo.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await Equipo.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;