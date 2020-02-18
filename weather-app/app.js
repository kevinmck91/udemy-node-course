const request = require('request')

const url = 'https://api.darksky.net/forecast/21cd85e5ad75f5d79dbc68794b51cc71/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    console.log(response)
})