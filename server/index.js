const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express()
app.use(express.json())
app.use(cors())


// MongoDB connection URI
const mongoURI = 'mongodb+srv://ECOSWIFT:ECOSWIFT@ecoswift.8hegwtb.mongodb.net/?retryWrites=true&w=majority&appName=ECOSWIFT';
// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start your application logic here
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });
app.listen(3550, () => {
    console.log("server is running on port 4000")
});