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
const server = require('./src/app.js');
const fetch = require('node-fetch')
const { conn, Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
    fetch('https://restcountries.com/v2/all')
      .then((data) => data.json())
      .then((countries) => {
        countries.map(async (el) => {
          await Country.create({
            id: el.alpha3Code,
            name: el.name,
            image: el.flag,
            continent: el.region,
            capital: el.capital ? el.capital : el.name,
            region: el.subregion,
            area: el.area,
            population: el.population,
          })
        })
      })
      .catch(err => console.log(err))
  })
})