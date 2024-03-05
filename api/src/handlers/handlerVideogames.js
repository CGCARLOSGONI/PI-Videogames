const getVideogames = require("../controllers/getVideogames");

const handlerVideogames = async (req, res) => {
  const { orderAlphabetic, genreName, source } = req.query;
  try {
    const videogamesFromApi = await getVideogames(orderAlphabetic, genreName, source);
    res.status(200).json(videogamesFromApi);
  } catch (error) {
    res.status(400).json({ error: "No se encontraron los videogames" });
  }
};

module.exports = handlerVideogames;
