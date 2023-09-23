// routes/entryRoutes.js
const express = require('express');
const router = express.Router();
const tattooController = require('../controllers/tattooRealizadasControllers');
const getTattoo = require('../controllers/getTattoo');
const getTattooById = require ('../controllers/getTattooRealizadasById')
const getTattooByClientId = require ('../controllers/getTattooRealizadasByIdClient')

router.post('/api/tattoo/create', tattooController.register);
router.get('/api/tattoo/getTattoo', getTattoo);
router.get('/api/tattoo/:tattooId', getTattooById.getTattooDetails);
router.get('/api/tattoo/tattobyclient/:clientId', getTattooByClientId.getTattoosByCliente);

module.exports = router;
