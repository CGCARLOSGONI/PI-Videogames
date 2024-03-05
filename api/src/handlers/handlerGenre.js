const getGenres = require("../controllers/getGenres");

const handlerGenre = async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ error: "No se encontraron los genres" });
  }
};

module.exports = handlerGenre;
