const request = require('request')

const geocodeFunction = (address, callback) => {

    let mapBoxRequest = { url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia2V2bWNrZW9uIiwiYSI6ImNrNnRiNzRkcjBuaHYzdXQ5ZWljZjQ4MWkifQ.A3HTPlh4iRQfqd6vgI0IWg', json:true} 

    // check if proxy settings are required
    try {  
        mapBoxRequest.proxy = require('../proxy-settings.js');
    } catch(err) {
        //console.log("Proxy settings not required");
    }

    request( mapBoxRequest, (error, response)  => {
        
        if(error){
            callback('Error connecting to Map Box' , undefined)
        } else if (response.body.features.length === 0){
            callback('No data for search' , undefined)
        } else {
            callback(undefined , {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocodeFunction