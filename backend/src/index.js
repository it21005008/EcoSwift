const express = require('express');
const cors = require('cors');
require("dotenv").config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_CONNECTION_STRING);


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async(req, res) => {
    res.json({ message: "hello from express endpoint" });
});


app.listen(3000, () => {
    console.log("Server is running on localhost:3000")
});