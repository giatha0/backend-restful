const Project = require('../models/project.js');

const createProject = async (data) => {
    console.log('data', data);
    let myProject = null;
    if (data.type === "EMPTY PROJECT") {
        myProject = await Project.create(data);
        console.log('myProject', myProject);
        // return myProject;
    }

    if (data.type === 'ADD-USER') {
        // myProject = await Project.findOneAndUpdate(
        //     { _id: data.projectId },
        //     { $push: { userInfor: data.userArr } },
        //     { new: true }
        // );
        // console.log('myProject', myProject);

        myProject = await Project.findOne({ _id: data.projectId });
        console.log('myProject', myProject);
        myProject.userInfor.push(data.userArr);
        await myProject.save();


    }

    return myProject;
}

const getProjectsService = async (page, limit) => {
    const projects = await Project.find({})
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userInfor")
        .exec();

    // console.log('projects', projects);
    return { projects, total: projects.length };
}

module.exports = {
    createProject, getProjectsService
}
