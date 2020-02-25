const path = require('path')        // core module
const express = require('express')


// Doenst take arguments. Configured by functions
const app = express();

console.log(path.join(__dirname, '../public/index.html'))

// Configures what the server does when someone tries to get the resource at the url (HTML or JSON)
// It takes in the partial URL (route) or and the callback function : 
app.get('', (req, res) => {
    res.send('<h1>Home Page</h1>')     // allows us to send something back to the requester (a browser)
})

app.get('/weather', (req, res) => {
    res.send({
        Weather: "Snow",
        Temperature :3
    })
})

app.get('/help', (req, res) => {    //Automaticlally stringafied by express
    res.send([
        {
            name: "Kevin",
            age :20
        },
        {
            name: "Alice",
            age :20
        }
    ]) 
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

