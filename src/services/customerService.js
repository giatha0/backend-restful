const Customer = require('../models/customer');
const aqp = require('api-query-params');

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

const getCustomers = async (limit, page, name, queryString) => {
    try {
        let results = null;

        if (limit && page) {
            const { filter } = aqp(queryString);
            delete filter.page;
            console.log('filter', filter);
            results = await Customer.find(filter)
                .limit(limit)
                .skip((page - 1) * limit);

        } else {
            results = await Customer.find({});
        }

        let count = results.length;
        return { results, count };
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updateCustomer = async (id, customerData) => {
    try {
        let results = await Customer.findByIdAndUpdate(id, customerData);
        console.log('results', results);
        return results;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteCustomer = async (id) => {
    try {
        let results = await Customer.deleteById({ _id: id });
        // console.log('results', results);
        return results;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteManyCustomers = async (ids) => {
    try {
        let results = await Customer.delete({ _id: { $in: ids } });
        // console.log('results', results);
        return results;
    } catch (error) {
        console.log(error);
        return false;
    }
}


module.exports = {
    createCustomer, createManyCustomers, getCustomers, updateCustomer,
    deleteCustomer, deleteManyCustomers
}