const projectService = require('../services/projectService.js');

const postCreateProject = async (req, res) => {
    // res.send('Hello World!');
    const data = req.body;
    // console.log('data', data);
    const project = await projectService.createProject(data);
    console.log('project', project);
    return res.status(200).json({
        message: 'create project successfully',
        data: project
    });
}

const getProjects = async (req, res) => {
    let { page, limit } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const projects = await projectService.getProjectsService(page, limit);
    return res.status(200).json({
        message: 'get projects successfully',
        total: projects.total,
        data: projects

    });
}

const putUpdateProject = async (req, res) => {
    const data = req.body;
    console.log('data', data);
    const project = await projectService.updateProject(data);
    return res.status(200).json({
        message: 'update project successfully',
        data: project
    });
}

const deleteProject = async (req, res) => {
    const { id } = req.body;
    await projectService.deleteProject(id);
    return res.status(200).json({
        message: 'delete project successfully',
        data: project
    });
}

module.exports = {
    postCreateProject, getProjects, putUpdateProject, deleteProject
}