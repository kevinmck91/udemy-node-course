const request = require('request')

let requestObject = { url: 'https://api.darksky.net/forecast/21cd85e5ad75f5d79dbc68794b51cc71/53.2995,-6.1754', json:true} 

// Configure proxy specific settings by trying to access proxy-settings.js file (only exists on work PC)

try {  
    requestObject.proxy = require('./proxy-settings.js');
} catch(err) {
    console.log("ERROR : Cant load the proxy settings - Not Required");
}


// Applicaion

request( requestObject, (error, response) => {
   // console.log(error, response);
    //const data = JSON.parse(response.body.currently);
     console.log(response.body.currently);
    
})
