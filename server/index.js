const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://ECOSWIFT:ecoswift@ecoswift.8hegwtb.mongodb.net/?retryWrites=true&w=majority&appName=ECOSWIFT");



app.listen(3000, () => {
    console.log("server is running on port 3000")
});