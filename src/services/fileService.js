
const uploadSingle = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let timestamp = new Date().getTime();
    let fileName = `${timestamp}-${fileObject.name}`;
    let uploadPath = __dirname + `/../public/uploads/${fileName}`;

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);
        return {
            status: 200,
            message: 'Upload file successfully',
            path: fileName,
        }

    } catch (error) {
        console.log('error', error);
        return {
            status: 500,
            message: err,
        }

    }
}

const uploadMultiple = async (files) => {
    let timestamp = new Date().getTime();
    let fileName = [];
    for (let file in files) {
        if (Array.isArray(files[file])) {
            for (let i = 0; i < files[file].length; i++) {
                let uploadPath = __dirname + `/../public/uploads/${timestamp}-${files[file][i].name}`;
                fileName.push(`${timestamp}-${files[file][i].name}`);
                try {
                    await files[file][i].mv(uploadPath);

                } catch (error) {
                    console.log('error', error);
                    return {
                        status: 500,
                        message: err,
                    }
                }
            }
        } else {
            let uploadPath = __dirname + `/../public/uploads/${timestamp}-${files[file].name}`;
            fileName.push(`${timestamp}-${files[file].name}`);
            try {
                await files[file].mv(uploadPath);

            } catch (error) {
                console.log('error', error);
                return {
                    status: 500,
                    message: err,
                }
            }
        }
    }
    return {
        status: 200,
        message: 'Upload file successfully',
        path: fileName,
    }
}


module.exports = {
    uploadSingle,
    uploadMultiple
}