const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const handlerVideogames = require('../handlers/handlerVideogames')
const handlerName = require('../handlers/handlerName')
const handlerById = require('../handlers/handlerById');
const handlerGenre = require('../handlers/handlerGenre');
const postGenre = require('../controllers/postGenre');


const router = Router();

router.get("/videogames/:idVideogames", handlerById);

router.get("/videogames/name", handlerName);

router.get("/videogames", handlerVideogames);

router.get("/genre", handlerGenre);

//router.post("/videogames", postGenre);

module.exports = router;