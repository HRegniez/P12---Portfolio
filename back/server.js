require('dotenv').config()

const express = require('express')
const projectsRoutes = require('./routes/projects')

// express app
const app = express()

app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
})

// Routes
app.use('/api/projects', projectsRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})