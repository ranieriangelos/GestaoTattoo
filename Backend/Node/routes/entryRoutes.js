// routes/entryRoutes.js
const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryControllers');
const getEntries = require('../controllers/getEntries');

router.post('/api/entradas/create', entryController.register);
router.use('/api/entradas/getEntries', getEntries);

module.exports = router;
