const getById = require("../controllers/getById");
const getName = require("../controllers/getName");
const getVideogames = require ("../controllers/getVideogames");

const handlerVideogames = async (req, res) => {
     const { idVideogames, name } = req.query;
    try {
        if(idVideogames){
            const byId = await getById(idVideogames)
            return res.status(200).json(byId);
        }
          if(name){
            const videogamesByName = await getName(name);
            return res.status(200).json(videogamesByName);
        } else{
        const videogamesFromApi = await getVideogames();
        res.status(200).json(videogamesFromApi)
        }
    } catch (error) {
        res.status(400).json({ error: 'No se encontraron los videogames'});
    }

}

module.exports = handlerVideogames;

