const db = require('../config/config');

const Tattoo = {};

Tattoo.create = (entry, result) =>{

    const sql = `
        INSERT INTO 
            tatuagensRealizadas(
              IDAgendamento,
              ValorCompleto,
              ValorRecebido,
              SinalPago,
              FormaDePagamento,
              IDArtista,
              Data,
              Descricao,
              Foto,
              Estilo,
              IDComanda,
              IDCliente
            )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query
    (
        sql, 
            [
                entry.IDAgendamento,
                entry.ValorCompleto,
                entry.ValorRecebido,
                entry.SinalPago,
                entry.FormaDePagamento,
                entry.IDArtista,
                entry.Data,
                entry.Descricao,
                entry.Foto,
                entry.Estilo,
                entry.IDComanda,
                entry.IDCliente
            ],
            (err, res) =>{
                if (err){
                    console.log('Erro: ', err);
                    result(err, null);
                } else{
                    console.log('Id da nova tatuagem: ', res.insertId);
                    result(null, res.insertId);

                }
            }
    )
};


Tattoo.findById = (tattooId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM tatuagensrealizadas WHERE IDTrabalho = ?';
  
      db.query(sql, [tattooId], (err, res) => {
        if (err) {
          console.error('Erro ao buscar os detalhes da tatuagem:', err);
          reject(err);
          return;
        }
  
        if (res.length) {
          resolve(res[0]);
          return;
        }
  
        console.log('Tatuagem não encontrada para ID:', tattooId);
        reject({ kind: "not_found" });
      });
    });
  };
  
  
  // Controller para buscar os detalhes do cliente com base no clientId
  exports.getTattooDetails = async (req, res) => {
    const { tattooId } = req.params; // Obtenha o clientId da URL
  
    try {
      // Use o modelo do cliente para buscar o cliente no banco de dados
      const tattoo = await Tattoo.findById(tattooId);
  
      if (!tattoo) {
        // Se o cliente não for encontrado, envie uma resposta com status 404 (Não encontrado)
        return res.status(404).json({ message: 'Tatuagem não encontrada.' });
      }
  
      // Se o cliente for encontrado, envie os detalhes do cliente como resposta em formato JSON
      res.json(tattoo.trim());
    } catch (error) {
      console.error('Erro ao buscar os detalhes da Tattoo:', error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };

  
  Tattoo.findByClienteId = (clienteId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM tatuagensrealizadas WHERE IDCliente = ?';
  
      db.query(sql, [clienteId], (err, res) => {
        if (err) {
          console.error('Erro ao buscar as tatuagens do cliente:', err);
          reject(err);
          return;
        }
  
        if (res.length) {
          resolve(res);
          return;
        }
  
        console.log('Nenhuma tatuagem encontrada para o cliente com ID:', clienteId);
        reject({ kind: "not_found" });
      });
    });
  };
  
  
  

module.exports = Tattoo;