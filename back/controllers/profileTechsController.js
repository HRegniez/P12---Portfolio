// get all techs
const ProfileTechs = require('../models/profileTechsModel')


const getTechs = async (req, res) => {
    const technos = await ProfileTechs.find({}).sort({id: +1})

    res.status(200).json(technos)
}

module.exports = {
    getTechs
}