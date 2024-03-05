const getById = require("../controllers/getById");

const handlerById = async (req, res) => {
  try {
    const { idVideogame } = req.params;
    const byId = await getById(idVideogame);
    return res.status(200).json(byId);
  } catch (error) {
    return res.status(404).json({ error: `No se encontró el videojuego con ID ${idVideogame}` });
  }
};

module.exports = handlerById;
