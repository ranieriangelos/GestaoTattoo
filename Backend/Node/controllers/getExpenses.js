const express = require('express');
const router = express.Router();
const Saidas = require('../models/expenses');

router.post('/api/getExpenses', async (req, res) => {
  try {

    const expenses = await Saidas.getAllExpenses();

    res.status(200).json({
      success: true,
      message: 'Saidas buscadas com sucesso.',
      expenses: expenses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar as saidas.',
      error: error.message
    });
  }
});

module.exports = router;
