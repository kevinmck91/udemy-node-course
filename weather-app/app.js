const request = require('request')

let darkSkyRequest = { url: 'https://api.darksky.net/forecast/21cd85e5ad75f5d79dbc68794b51cc71/53.2995,-6.1754?', json:true} 
let mapBoxRequest = { url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2V2bWNrZW9uIiwiYSI6ImNrNnRiNzRkcjBuaHYzdXQ5ZWljZjQ4MWkifQ.A3HTPlh4iRQfqd6vgI0IWg', json:true} 

// If work pc, search for proxy settings
try {  
    darkSkyRequest.proxy = require('./proxy-settings.js');
    mapBoxRequest.proxy = require('./proxy-settings.js');
} catch(err) {
    console.log("ERROR : Cant load the proxy settings - Not Required");
}


// Applicaion

request( darkSkyRequest, (error, response) => {

    if(error){
        console.log("Error connecting to darkSky")
    } else if (response.body.error){
        console.log("Error with darkSky response data")
    }else {

        const precipProbability = (response.body.currently.precipProbability)*100
        let temperature = response.body.currently.temperature;

        // if default is 
        if(!darkSkyRequest.url.includes("units=si")){
            temperature = ((temperature - 32)*(5/9)).toFixed(2)
        }
            
        console.log(response.body.daily.data[0].summary + " Is is currently " + temperature + " degrees out. There is a " + precipProbability + "% chance of " + response.body.currently.precipType)
    
    }
     
})


request( mapBoxRequest, (error, response) => {
    
    if(error){
        console.log("Error connecting to Map Box")
    } else if (response.body.features.length === 0){
        console.log("Error with Map Box response data")
    } else {
        latitude  = response.body.features[0].center[0];
        longitude  = response.body.features[0].center[1];
    }
})