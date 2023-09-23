// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesControllers');
const getExpenses = require('../controllers/getExpenses');

router.post('/api/saidas/create', expensesController.register);
router.use('/api/saidas/getExpenses', getExpenses);

module.exports = router;
 