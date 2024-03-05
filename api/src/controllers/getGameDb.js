const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const getGameDb = async (name) => {
  const game = await Videogame.findAll({
    include: { model: Genre },
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });
  console.log("game", game);
  return game;
};

module.exports = getGameDb;
