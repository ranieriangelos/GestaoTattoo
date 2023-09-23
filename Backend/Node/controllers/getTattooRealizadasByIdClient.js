// Importe o modelo de tatuagem do seu banco de dados
const Tattoo = require('../models/tattoo');

// Controller para buscar tatuagens por cliente com base no ID do cliente.
exports.getTattoosByCliente = async (req, res) => {
  const { clientId } = req.params; // Obter o ID do cliente da URL
  console.log('Buscando tatuagens do cliente com ID: ', clientId);

  try {
    // Use o modelo Tattoo para buscar as tatuagens do cliente no banco de dados
    const tattoos = await Tattoo.findAll({
      where: {
        IDCliente: clientId
      }
    });

    console.log('Tatuagens encontradas: ', tattoos);

    if (!tattoos || tattoos.length === 0) {
      console.log('Nenhuma tatuagem encontrada para o cliente com ID: ', clientId);
      return res.status(404).json({ message: 'Nenhuma tatuagem encontrada' });
    }

    // Se tatuagens forem encontradas, envie-as como resposta em formato JSON
    res.json(tattoos);
  } catch (error) {
    console.error('Erro ao buscar as tatuagens', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
