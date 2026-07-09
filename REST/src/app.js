//! server ne create kru 
const express = require("express");

const app = express();  //* here app is instance

app.use(express.json()); // middleware for reading json data from frotend that come in body


const notes = [];

// title ,description 

/* POST /notes  create */
app.post('/notes', (req, res) => {
    // console.log(req.body);
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    });
})

/* GET /notes  getting the data form get request*/
app.get('/notes', (req, res) => {

    res.status(200).json({
        message: "note send successfully",
        notes: notes
    })
})

/* DELETE /notes/:index */
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index;

    delete notes[index] // so at that index there is null automatically added

    if (index > notes.length - 1) {
        res.status(404).json({
            message: "note is not in the array"
        })
    }

    res.status(200).json({
        message: "note deleted successfully",
    })
})

/* PATCH /notes/ */
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const description = req.body.description;  // body is object that contain description

    notes[index].description = description;

    res.status(200).json({
        message: "Notes Updated SUccessfuly"
    })
})

module.exports = app;