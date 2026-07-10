const express = require('express'); //server creating
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json()); //! data don't come in raw format so need to use different middleware


const upload = multer({ storage: multer.memoryStorage() }) //! this time as data file came, not text

app.post('/create-post', upload.single("image"), async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer, req.file.originalname);  //* here the uploadFile is async functinn and for response we need to wait so awai is necessary here 

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "201 code for new Resource created succesfully",
        post
    })
});

app.get("/get-posts", async (req, res) => {
    const posts = await postModel.find();

    return res.status(200).json({
        message: "200 code for getting all the posts",
        posts
    });
})

module.exports = app; 