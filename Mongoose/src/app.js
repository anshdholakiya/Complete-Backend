require("dotenv").config(); // load env file
const express = require("express");
const noteModel = require("./models/note.model.js");

// server created
const app = express();
app.use(express.json());

/* 

POST /notes => create a note
GET /notes => get all notes
PATCH /notes/:id => update
DELETE /notes/:id => delete


*/

app.post("/notes", async (req, res) => {
    const data = req.body; // get data from body

    await noteModel.create({
        title: data.title,
        description: data.description,
    }); // karan ke data mubmai na server ma jay store thay and response mokle to thodi var lage  ne bhai

    res.status(201).json({ message: "Notes Created Succesfully" });

    console.log("somehting added");
});

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find(); //! find alwayas return []  and find bdhuy retur kre noteModel mathi

    // const notes = await noteModel.findOne({   //! findOne always return {} object
    //     title: "Test Title 1v"  //* it can also return null or empty array accoringly
    // })

    // const notes = await noteModel.find({
    //     title : "Test Title 1"
    // })

    res.status(200).json({
        Message: "Notes fetch successfully",
        notes: notes,
    });
});
/*
    find => [{},{}] or []
    findOne => {} or null
*/

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id,
    });

    res.status(200).json({
        message: "Note deleted successfully",
    });
});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({ _id: id }, { description: description }); // findOneAndUpdate awlays take two object

    res.status(200).json({
        message: "Note updated successfully",
    });
});

// app.get("/notes",(req,res) =>{
//     await noteModel.
// })

/* note = {title,description} */

module.exports = app;
