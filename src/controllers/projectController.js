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



module.exports = {
    postCreateProject
}