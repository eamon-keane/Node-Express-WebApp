const axios = require('axios');
const xml2js = require('xml2js');
const debug = require('debug')('app:goodreadsService');

const parser = xml2js.Parser({ explicitArray: false });


function goodreadsService() {
  function getBookByID(id) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.goodreads.com/book/isbn/${id}?key=TRqPse4SucIlB8AYvLvGzw`)
        .then((response) => {
          parser.parseString(response.data, (err, result) => {
            if (err) {
              debug(err);
            } else {
              debug(result);
              resolve(result.GoodreadsResponse.book);
            }
          });
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }
  return { getBookByID };
}
module.exports = goodreadsService();
