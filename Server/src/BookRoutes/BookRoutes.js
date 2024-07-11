import express from "express";
const Router= express.Router()
import Book from "../BookSchema/BookSchema.js"; 
Router.post('/', async (req, res) => {
    try {
        const { title, author, PublishYear } = req.body;
        if (!title || !author || !PublishYear) {
            return res.status(400).send({ message: "Please send all the fields" });
        }

        const book = await Book.create({
            title,
            author,
            PublishYear
        });

        return res.status(201).send(book);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

Router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json(books); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});
//////////////by id
Router.get('/:id', async (req, res) => {
    try {
        const {id}=req.params;
        const books = await Book.findById(id);
        return res.status(200).json(books); // Use 200 status code for successful response
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

Router.put('/:id', async (req, res) => {
    try {
        const { title, author, PublishYear } = req.body;
        if (!title || !author || !PublishYear) {
            return res.status(400).send({ message: "Please send all the fields" });
        }

        const {id}=req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).json({message:"Book not found"});  
        }

        return res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

Router.delete('/:id', async (req, res) => {
    try {
        const {id}=req.params;
        const books = await Book.findByIdAndDelete(id);
        return res.status(200).json({message:"Book Is deleted Succesfully"}); // Use 200 status code for successful response
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});
export default Router;