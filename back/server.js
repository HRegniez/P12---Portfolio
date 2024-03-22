require('dotenv').config()

const express = require('express')

// express
const app = express()

// Routes
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})