const postVideogame = require("../controllers/postVideogame");

const handlerPostVideogame = async (req, res) => {
  const { name, description, platforms, background_image, released, rating, genres } = req.body;

  try {
    if (!name || !description || !platforms || !background_image || !released || !rating || !genres.length) throw Error("Falta información para crear el videogame");

    const data = {
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
    };
    const newVideogame = await postVideogame(data, genres);
    res.status(200).json(newVideogame);

  } catch (error) {
    res.status(404).json({ error: "error.message" });
  }
};

module.exports = handlerPostVideogame;
