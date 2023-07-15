const taskService = require('../services/taskService.js');

const postCreateTask = async (req, res) => {
    try {
        const data = req.body;
        console.log('data', data);
        const task = await taskService.createTask(data);
        return res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const getTasks = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const tasks = await taskService.getTasksService(page, limit);
        return res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const putUpdateTask = async (req, res) => {
    try {
        const data = req.body;
        const task = await taskService.updateTask(data);
        return res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.body;
        const task = await taskService.deleteTaskService(id);
        return res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


module.exports = {
    postCreateTask, getTasks, putUpdateTask, deleteTask
}