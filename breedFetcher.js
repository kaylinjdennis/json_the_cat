const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || body === '[]') {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const description = data[0].description;
    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };