const express = require('express');
const router = express.Router();
const Entradas = require('../models/entry');

router.post('/api/getEntries', async (req, res) => {
  try {

    const entries = await Entradas.getAllEntries();

    res.status(200).json({
      success: true,
      message: 'Entradas buscadas com sucesso.',
      entries: entries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar as entradas.',
      error: error.message
    });
  }
});

module.exports = router;
