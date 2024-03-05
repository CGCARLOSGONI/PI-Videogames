const { Router } = require("express");
const router = Router();

const handlerVideogames = require("../handlers/handlerVideogames");
const handlerName = require("../handlers/handlerName");
const handlerById = require("../handlers/handlerById");
const handlerGenre = require("../handlers/handlerGenre");
const handlerPostVideogame = require("../handlers/handlerPostVideogame");
const handlerGetDb = require("../handlers/handlerGetDb");

const videogamesRouter = Router();
videogamesRouter.get("/", handlerVideogames);
videogamesRouter.get("/name", handlerName);
videogamesRouter.get("/:idVideogame", handlerById);
videogamesRouter.post("/", handlerPostVideogame);
//videogamesRouter.get("/", handlerGetDb)

const genreRouter = Router();
genreRouter.get("/", handlerGenre);

router.use("/videogames", videogamesRouter);
router.use("/genre", genreRouter);

module.exports = router;
