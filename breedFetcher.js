const request = require('request');
const breed = process.argv[2].toLowerCase();

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (body === '[]') {
    console.log('error: breed not found');
    return;
  }
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});