const express = require("express");
const { bookModel } = require("../Schema/BookSchema");

const BookRoutes = express.Router();

BookRoutes.post("/post", async (req, res) => {
  const { title, description, author, price, genre } = req.body;
  try {
    const newBook = new bookModel({title, description, author, price, genre});
    await newBook.save();
    res.status(200).json({message: "Book saved successfully"});
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
});


BookRoutes.get("/get", async (req, res) => {
    try {
        const data = await bookModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.json(error.message);
        console.log(error.message);
    }
})

BookRoutes.get("/getbygenre", async (req, res) => {
    const { genre } = req.query;
    try {
        const data = await bookModel.find({genre: genre});
        res.status(200).json(data);
    } catch (error) {
        res.json(error.message);
        console.log(error.message);
    }
})

BookRoutes.delete("/delete/:id",async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    try {
        await bookModel.findByIdAndDelete(id);
        res.status(200).json({message: "Book deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
})


module.exports = {
  BookRoutes,
};
