
const fetchGeocode = require('./utils/geocodeFinder')
const fetchForecast = require('./utils/weatherFinder')


fetchGeocode('new york', (error, data) => {

    if(error){
        console.log(error)
    } else {
        console.log(data)
    }

    fetchForecast(data.latitude, data.longitude, (error, data) => {

        if(error){
            console.log(error);
        } else {
            console.log(data);
        }

    })
})

