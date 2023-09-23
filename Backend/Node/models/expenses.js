const db = require('../config/config');

const Saidas = {};

Saidas.create = (expenses, result) =>{

    const sql = `
        INSERT INTO 
            saidas(
                Fornecedor, 
                Data,
                Descricao,
                Valor,
                Categoria,
                FormaDePagamento,
                Notas
            )
        VALUES(?, ?, ?, ?, ?, ?, ?)
    `;

    db.query
    (
        sql, 
            [
                expenses.Fornecedor,
                expenses.Data,
                expenses.Descricao,
                expenses.Valor,
                expenses.Categoria,
                expenses.FormaDePagamento,	
                expenses.Notas
            ],
            (err, res) =>{
                if (err){
                    console.log('Erro: ', err);
                    result(err, null);
                } else{
                    console.log('Id de nova movimentação de saida: ', res.insertId);
                    result(null, res.insertId);

                }
            }
    )
}

module.exports = Saidas;