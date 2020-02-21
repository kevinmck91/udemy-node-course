
const fetchGeocode = require('./utils/geocodeFinder')
const fetchForecast = require('./utils/weatherFinder')

const location = process.argv[2];

if(!location){
    console.log("Please provide address")
} else {  

    fetchGeocode(location, (error, geoData) => {

        if(error)
            return console.log(error)
        

        fetchForecast(geoData.latitude, geoData.longitude, (error, forecastData) => {

            if(error)
                return console.log(error)
        
            console.log(geoData.location)
            console.log(forecastData)        

        })
    })

}