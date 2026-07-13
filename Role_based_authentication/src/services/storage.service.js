const { ImageKit } = require("@imagekit/nodejs");

const ImageKitClient = new ImageKit({
    privateKey: process.env.ImageKit_PRIVATE_KEY,
});

async function uploadFile(file) {
    try {
        const result = await ImageKitClient.files.upload({
            file,
            fileName: "music_" + Date.now(),
            folder: "ansh/music",
        });
        console.log("file uploaded succesfully");

        return result;
    } catch (error) {
        console.log("error storage.service.js  \n", error);
    }
}

module.exports = { uploadFile };
