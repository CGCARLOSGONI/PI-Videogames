const getName = require('../controllers/getName');

const handlerName = async(req, res) => {
    try {
      const { name } = req.query;
      
 const videogamesByName = await getName(name);
 return res.status(200).json(videogamesByName)  
    } catch (error) {
        console.log(error);
        return res.status(404).json({error: `No se encontro ${name}`})
    }
 
}

module.exports = handlerName;

