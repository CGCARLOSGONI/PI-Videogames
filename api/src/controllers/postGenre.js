const { Videogame, Genre } = require('../db');

const postGenre = async (data, genre) => {
 const newVideogame = await Videogame.create(data);
 await newVideogame.addGenre(genre);
 if(!newVideogame) throw Error('No se creo el videogame');
 return newVideogame;
}

module.exports = postGenre;