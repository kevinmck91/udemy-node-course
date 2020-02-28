const path = require('path')        // core module
const express = require('express')
const hbs = require('hbs')


// Doenst take arguments. Configured by functions
const app = express();

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
console.log(partialsPath)

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



// Setup static directiory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.static(viewsPath))



app.get('', (req, res) => {
    res.render('index', {
        title:'Weather App',
        name: 'Kevin Mckeon'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title:'About Page',
        name: 'Kevin Mckeon',

    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help Page',
        name: 'Kevin Mckeon'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404 - Page Not Found',
        details: 'Help Page not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title:'404 - Page Not Found',
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

