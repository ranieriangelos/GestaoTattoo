//Controlador para adicionar uma nova tatuagem ao banco.
const Tattoo = require('../models/tattoo');

module.exports = {
    register(req, res){

        const tattoo = req.body;
        Tattoo.create(
            tattoo,
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
                    data: data //Id da nova tattoo
                });
            }
        )

    }
}