const mongoose = require('mongoose')

const Schema = mongoose.Schema

const languagesSchema = new Schema({
    id: {
        type: Number,
        require: true
    },
    techName: {
        type: String,
        require: true
    },
    iconSrc: {
        type: String,
        require: true
    },
    alt: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ProfileLanguages', languagesSchema )