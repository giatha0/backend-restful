const Task = require('../models/task');

const createTask = async (data) => {
    // console.log('data', data);
    if (data.type === 'EMPTY-TASK') {
        const task = await Task.create(data);
        return task;
    }
}

const getTasksService = async (page, limit) => {
    const tasks = await Task.find({})
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
    return tasks;
}

const updateTask = async (data) => {
    const tasks = await Task.findOneAndUpdate(
        { _id: data.id },
        { $set: data },
        { new: true }
    );
    return tasks;
}

const deleteTaskService = async (id) => {
    const tasks = await Task.deleteById({ _id: id });
    return tasks;
}

module.exports = {
    createTask, getTasksService, updateTask, deleteTaskService
}