const mongoose = require('mongoose');

// test mongoose
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        phone: String,
        email: String,
        iamge: String,
        description: String,

    },
    { timestamps: true }
);
const Customer = mongoose.model('user', customerSchema);


module.exports = Customer;