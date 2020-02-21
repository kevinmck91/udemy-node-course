const request = require('request')

const forecast = (latitude, longitude, callback) => {

    let darkSkyRequest = { url: 'https://api.darksky.net/forecast/21cd85e5ad75f5d79dbc68794b51cc71/' + latitude + ',' + longitude + '?units=si' , json:true} 

    // check if proxy settings are required
    try {  
        darkSkyRequest.proxy = require('../proxy-settings.js');
    } catch(err) {
        //console.log("Proxy settings not required");
    }    

    request( darkSkyRequest, (error, response) => {

        if(error) {
            callback('Error connecting to DarkSky' , undefined)
        } else if(response.body.error) {
            callback('Connection OK : error is data returned' , undefined)
        } else {
            callback(undefined , {
                summary : response.body.daily.data[0].summary,
                temperature : response.body.currently.temperature,
                precipProbability : response.body.currently.precipProbability
            })
        }
    })
} 

module.exports = forecast