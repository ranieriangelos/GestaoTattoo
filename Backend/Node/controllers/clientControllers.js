const Client = require('../models/client');

module.exports = {
    register(req, res){

        const client = req.body;
        Client.create(
            client,
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
                    data: data //Id do novo cliente
                });
            }
        )

    }
}