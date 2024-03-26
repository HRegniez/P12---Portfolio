// get all Languages
const ProfileLanguages = require('../models/profileLanguagesModel')


const getLanguages = async (req, res) => {
    try {
        const languages = await ProfileLanguages.find({}).sort({id: +1})
        res.status(200).json(languages)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}



module.exports = {
    getLanguages
}