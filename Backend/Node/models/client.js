const db = require('../config/config');

const Clientes = {};

Clientes.create = (entry, result) =>{

    const sql = `
        INSERT INTO 
            clientes(
                Nome,
                Sobrenome,
                Cidade,
                Celular,
                Email,
                Instagram,
                Nascimento,
                RG,
                IDAnamnese,
                Recorrencia,
                TrabalhosRealizados,
                TrabalhosAgendados,
                TrabalhosCancelados,
                TotalInvestido
            )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query
    (
        sql, 
            [
                entry.Nome,
                entry.Sobrenome,
                entry.Cidade,
                entry.Celular,
                entry.Email,
                entry.Instagram,	
                entry.Nascimento,	
                entry.RG,
                entry.IDAnamnese,
                entry.Recorrencia,
                entry.TrabalhosReazlizados,
                entry.TrabalhosAgendados,
                entry.TrabalhosCancelados,
                entry.TotalInvestido
            ],
            (err, res) =>{
                if (err){
                    console.log('Erro: ', err);
                    result(err, null);
                } else{
                    console.log('Id do novo cliente: ', res.insertId);
                    result(null, res.insertId);

                }
            }
    )
};

// ... código anterior ...

Clientes.findById = (clientId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clientes WHERE ID =?';
  
      db.query(sql, [clientId], (err, res) => {
        if (err) {
          console.error('Erro ao buscar os detalhes do cliente:', err);
          reject(err);
          return;
        }
  
        if (res.length) {
          resolve(res[0]);
          return;
        }
  
        console.log('Cliente não encontrado para ID:', clientId);
        reject({ kind: "not_found" });
      });
    });
  };
  
  // ... código posterior ...
  
  // Controller para buscar os detalhes do cliente com base no clientId
  exports.getClientDetails = async (req, res) => {
    const { clientId } = req.params; // Obtenha o clientId da URL
  
    try {
      // Use o modelo do cliente para buscar o cliente no banco de dados
      const cliente = await Cliente.findById(clientId);
  
      if (!cliente) {
        // Se o cliente não for encontrado, envie uma resposta com status 404 (Não encontrado)
        return res.status(404).json({ message: 'Cliente não encontrado.' });
      }
  
      // Se o cliente for encontrado, envie os detalhes do cliente como resposta em formato JSON
      res.json(cliente.trim());
    } catch (error) {
      console.error('Erro ao buscar os detalhes do cliente:', error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  };
  
  

module.exports = Clientes;