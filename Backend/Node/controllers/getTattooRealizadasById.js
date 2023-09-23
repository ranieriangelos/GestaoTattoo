// Importe o modelo de tatuagem do seu banco de dados
const Tattoo = require('../models/tattoo');

// Controller para buscar os detalhes da tatuagem com base no tattooId
exports.getTattooDetails = async (req, res) => {
  const { tattooId } = req.params; // Obtenha o tattooId da URL
  console.log('Buscando detalhes da tatuagem:', tattooId)
  try {
    // Use o modelo de tatuagem para buscar a tatuagem no banco de dados
    const tattoo = await Tattoo.findById(tattooId);

    if (!tattoo) { 
      // Se a tatuagem não for encontrada, envie uma resposta com status 404 (Não encontrado)
      return res.status(404).json({ message: 'Tatuagem não encontrada.' });
    }

    // Se a tatuagem for encontrada, envie os detalhes da tatuagem como resposta em formato JSON
    res.json(tattoo);
  } catch (error) {
    console.error('Erro ao buscar os detalhes da tatuagem:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};