const express = require('express');
const router = express.Router();
const Tattoos = require('../models/tattoo');

router.post('/api/getTattoo', async (req, res) => {
  try {

    const tattoo = await Tattoos.getAllTattoo();
 
    res.status(200).json({
      success: true,
      message: 'Tatuagens encontradas com sucesso.',
      tattoo: tattoo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar tatuagens.',
      error: error.message
    });
  }
});

module.exports = router;
