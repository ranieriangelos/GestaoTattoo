// routes/entryRoutes.js
const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientControllers');
const getClients = require('../controllers/getClients');
const getClientsById = require ('../controllers/getClientsById')

router.post('/api/clientes/create', clientsController.register);
router.get('/api/clientes/getClients', getClients);
router.get('/api/clientes/:clientId', getClientsById.getClientDetails);

module.exports = router;
