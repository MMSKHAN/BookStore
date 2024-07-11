import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import Book from './src/BookSchema/BookSchema.js'; // Correct import of default export
import Router from './src/BookRoutes/BookRoutes.js';
import cors from "cors"
dotenv.config();

import express from "express";
const app = express();

const dbUrl = process.env.dbUrl;
const port = process.env.port;

app.use(express.json()); // Middleware to parse JSON request body
app.use(cors())
app.get('/', (req, res) => {
    res.status(200).send("Hello, sir this is Muhammad Saud khan Mearn Stack Developer ");
});
app.use('/Books',Router)

mongoose.connect(dbUrl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
