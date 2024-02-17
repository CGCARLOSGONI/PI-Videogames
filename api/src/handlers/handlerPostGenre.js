const postGenre = require('../controllers/postGenre')

const handlerPostGenre = async (req, res) => {
    const { name, description, platforms, background_image, released, rating, genre } = req.body;
    try {
        if(!name || description || platforms || background_image || released || rating || genre)
        throw Error('Falta información para crear el videogame')

        const data = {
          name,
          description,
          platforms,
          background_image,
          released,
          rating,
          genre,
        };
        const newVideogame = await postGenre(data, genre)
        res.status(200).json(newVideogame);
    } catch (error) {
        res.status(404).json({error: 'error.message'})
        
    }

}

module.exports = handlerPostGenre;