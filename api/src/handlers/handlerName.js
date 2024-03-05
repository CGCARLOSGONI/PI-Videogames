const getGameDb = require("../controllers/getGameDb");
const getName = require("../controllers/getName");

const handlerName = async (req, res, next) => {
  const { name } = req.query;

  try {
    const videogamesByNameApi = await getName(name);
    const videogamgesByNameDB = await getGameDb(name); 
    const allVideogamesByName = [...videogamesByNameApi, ...videogamgesByNameDB];
    return res.status(200).json(allVideogamesByName);
    next();
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = handlerName;
