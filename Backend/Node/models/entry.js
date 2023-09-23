const db = require('../config/config');

const Entradas = {};

Entradas.create = (entry, result) =>{

    const sql = `
        INSERT INTO 
            entradas(
                Data,	
                Descricao,	
                Valor,
                Tipo,	
                Detalhes,	
                FormaDePagamento,	
                Artista,	
                Cliente,
                Categoria,
                IDComanda
            )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query
    (
        sql, 
            [
                entry.Data,
                entry.Descricao,
                entry.Valor,
                entry.Tipo,
                entry.Detalhes,
                entry.FormaDePagamento,	
                entry.Artista,	
                entry.Cliente,
                entry.Categoria,
                entry.IDComanda
            ],
            (err, res) =>{
                if (err){
                    console.log('Erro: ', err);
                    result(err, null);
                } else{
                    console.log('Id de nova entrada: ', res.insertId);
                    result(null, res.insertId);

                }
            }
    )
}
  

module.exports = Entradas;