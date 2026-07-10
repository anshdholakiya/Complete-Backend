const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer, originalname) {
    console.log(buffer)
    console.log(typeof (buffer))

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: originalname
    });


    return result;
}

module.exports = uploadFile;