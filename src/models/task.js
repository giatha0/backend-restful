const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const projectSchema = new mongoose.Schema(
    {
        name: String,
        startDate: String,
        endDate: String,
        description: String,
    }
);

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String,
});

// test mongoose
const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        startDate: String,
        endDate: String,
        description: String,
        status: String,
        userInfor: userSchema,
        projectInfor: projectSchema,
    },
    { timestamps: true }
);

taskSchema.plugin(mongoose_delete, { overrideMethods: 'all' });


const Task = mongoose.model('task', taskSchema);


module.exports = Task;