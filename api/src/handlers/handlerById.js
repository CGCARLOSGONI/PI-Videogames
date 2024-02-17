const getById = require("../controllers/getById");

const handlerById = async (req, res) => {
  try {
    const { idVideogames } = req.params;
    const byId = await getById(idVideogames);
    return res.status(200).json(byId);
  } catch (error) {
    return res.status(404).json({ error: `No se encontro videogame con ${id}` });
  }
};

module.exports = handlerById;
