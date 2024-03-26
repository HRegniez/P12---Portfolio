require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const projectsRoutes = require('./routes/projects')
const profileRoutes = require('./routes/profile')

// express app
const app = express()

app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
})

// Routes
app.use('/api/projects', projectsRoutes)
app.use('/api/profile', profileRoutes)

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

