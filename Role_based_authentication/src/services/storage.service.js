const { ImageKit } = require("@imagekit/nodejs");

const ImageKitClient = new ImageKit({
    privateKey: process.env.ImageKit_PRIVATE_KEY,
});

async function uploadFile(file) {
    const result = await ImageKitClient.files.upload({
        
    })
}
