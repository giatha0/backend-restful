const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: String,
        phone: String,
    }
);

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
});

// test mongoose
const projectSchema = new mongoose.Schema(
    {
        type: String,
        name: {
            type: String,
            required: true,
        },
        startDate: String,
        endDate: String,
        description: String,
        customerInfor: customerSchema,
        userInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        leader: userSchema,
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    },
    { timestamps: true }
);

projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' });


const Project = mongoose.model('project', projectSchema);


module.exports = Project;