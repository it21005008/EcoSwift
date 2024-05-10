const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const EventRouter = require("./routes/Event.route")

const app = express();
app.use(cors());
app.use(express.json());

const port = 8080;
const uri =
    "mongodb+srv://ECOSWIFT:ECOSWIFT@ecoswift.8hegwtb.mongodb.net/?retryWrites=true&w=majority&appName=ECOSWIFT";

//DB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

// app.get("/", (req, res) => {
//     res.send("Api running");
// });


//import routes for Events
const EventRouter = require("./routes/Event.route")
app.use("/api/events", EventRouter)


app.listen(port, () => {
    console.log("Server is starting on port " + port);
});