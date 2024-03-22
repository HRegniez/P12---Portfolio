require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const projectsRoutes = require('./routes/projects')

// express app
const app = express()

app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
})

// Routes
app.use('/api/projects', projectsRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })

