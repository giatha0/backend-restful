const Customer = require('../models/customer');

const createCustomer = async (customerData) => {
    console.log('customerData', customerData);

    try {
        let results = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image

        });
        return results;
    } catch (error) {
        console.log(error);
        return false;
    }


}

const createManyCustomers = async (customers) => {
    try {
        let results = await Customer.insertMany(customers);
        let countSuccess = results.length;
        console.log('countSuccess', countSuccess);

        return {
            status: 200,
            EM: 'Create customers successfully',
            results: results,
            countSuccess: countSuccess,

        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            EM: 'Internal Server Error'
        }
    }
}

const getCustomers = async () => {
    try {
        let results = await Customer.find({});
        return results;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    createCustomer, createManyCustomers, getCustomers
}