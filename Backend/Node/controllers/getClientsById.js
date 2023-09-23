// Importe o modelo do cliente do seu banco de dados (exemplo fictício)
const Cliente = require('../models/client');

// Controller para buscar os detalhes do cliente com base no clientId
exports.getClientDetails = async (req, res) => {
  const {clientId} = req.params; // Obtenha o clientId da URL

  try {
    // Use o modelo do cliente para buscar o cliente no banco de dados
    const cliente = await Cliente.findById(clientId);

    if (!cliente) {
      // Se o cliente não for encontrado, envie uma resposta com status 404 (Não encontrado)
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    // Se o cliente for encontrado, envie os detalhes do cliente como resposta em formato JSON
    res.json(cliente);
  } catch (error) {
    console.error('Erro ao buscar os detalhes do cliente:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};
