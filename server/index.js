const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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

app.get("/", (req, res) => {
    res.send("Api running");
});

//import routes for Products and Users
app.use("/api/events", require("./routes/Event.route"));
app.use("/api/contacts", require("./routes/Contact.route"));

app.listen(port, () => {
    console.log("Server is starting on port " + port);
});