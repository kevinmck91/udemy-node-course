
const fetchGeocode = require('./utils/geocodeFinder')
const fetchForecast = require('./utils/weatherFinder')

const location = process.argv[2];

if(!location){
    console.log("Please provide address")
} else {  

    // deconstruct the response data from geocode.js
    fetchGeocode(location, (error, {latitude, longitude, location}) => {

        if(error)
            return console.log(error)
        

        // deconstruct the response data from weatherFinder.js
        fetchForecast(latitude, longitude, (error, {summary:mySummary, temperature:myTemp, precipProbability:chanceOfRain}) => {

            if(error)
                return console.log(error)
        
            console.log('Location : ' + location)
            console.log('Summary : ' + mySummary)  
            console.log('Temperature : ' + myTemp)  
            console.log('Chance of Rain : ' + chanceOfRain)        

        })
    })

}