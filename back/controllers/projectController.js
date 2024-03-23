// get all projects
const Project = require('../models/projectModel')

const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1})

    res.status(200).json(projects)
}

module.exports = {
    getProjects
}