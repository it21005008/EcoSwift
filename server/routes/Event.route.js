const express = require("express");
const router = express.Router();

const {
    addEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent,
} = require("../controllers/Event.controller");

router.get("/", getEvents);

router.post("/", addEvent);

router.get("/:id", getEvent);

router.put("/edit/:id", updateEvent);

router.delete("/delete/:id", deleteEvent);

module.exports = router;