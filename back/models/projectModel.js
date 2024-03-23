const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    imgLink: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    siteLink: {
        type: String,
        require: true
    },
    githubLink: {
        type: String,
        require: true
    },
    techs: [{
        type: String,
        require: true
    }],
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)