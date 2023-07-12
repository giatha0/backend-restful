const fileService = require('../services/fileService');
const customerService = require('../services/customerService');

const postCreateCustomer = async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let image = '';
    let customerData = {};
    let file = req.files;

    if (!file || Object.keys(file).length === 0) {
        return res.status(400).send('No files were uploaded.');
    } else {
        let results = await fileService.uploadSingle(file.image);
        image = results.path;
        console.log('results', results);
    }

    customerData = {
        name, address, phone, email, description, image
    }

    let customer = await customerService.createCustomer(customerData);

    return res.status(200).json({
        EM: 'OK',
        data: customer
    })
}



module.exports = {
    postCreateCustomer
}