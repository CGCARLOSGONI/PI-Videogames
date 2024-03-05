const getGameDb = require('../controllers/getGameDb');

const handlerGetDb = async(req, res) => {
   const { name } = req.query;
   try {
    const game = await getGameDb(name);
    res.status(200).json(game)
   } catch (error) {
    res.status(404).json({ error: `Error al buscar el game con ${name}` });
   }
}

module.exports = handlerGetDb