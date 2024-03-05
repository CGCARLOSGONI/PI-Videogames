//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require("axios");
const server = require("./src/app.js");
const { conn, Genre } = require("./src/db.js");
const postGenre = require("./src/controllers/postGenre.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3000, async () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console
    const dbGenre = await Genre.findAll();
    if (!dbGenre.length) {
      postGenre();
    }
  });
});
