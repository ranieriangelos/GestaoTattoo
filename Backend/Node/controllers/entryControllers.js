const Entry = require('../models/entry');

module.exports = {
    register(req, res){

        const entry = req.body;
        Entry.create(
            entry,
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
                    data: data //Id da nova entrada no caixa
                });
            }
        )

    }
}