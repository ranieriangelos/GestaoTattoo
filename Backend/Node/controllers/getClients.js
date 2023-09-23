const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.post('/api/getClients', async (req, res) => {
  try {

    const client = await Client.getAllClients();
 
    res.status(200).json({
      success: true,
      message: 'Clientes encontrados com sucesso.',
      client: client
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar clientes.',
      error: error.message
    });
  }
});

module.exports = router;
