const Expenses = require('../models/expenses');

module.exports = {
    register(req, res){

        const expense = req.body;
        Expenses.create(
            expense,
            (err, data) =>{
                if(err){
                    return res.status(501).json({
                        success: false,
                        message: 'Houve um erro',
                        error: err
                    });
                }

                return res.status(201).json({
                    success: true,
                    message: 'Tudo ocorreu corretamente',
                    data: data //Id da nova saida no caixa
                });
            }
        )

    }
}