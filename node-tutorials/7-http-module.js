
// No External NPM imported module can do more than you can create youself 
// External NPM imported module (easy to use)
// const request = require('request'); 

// Internal Node Module (low Level - complicated to use)
const https = require('https');

const path = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' 

https.get(path, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});