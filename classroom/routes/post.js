const express = require("express");
const router = express.Router(); // this is a router object 

// Index - POSTS
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//Show - posts
router.get("//:id", (req, res) => {
    res.send("GET for post id");
});

//POST 
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//Delete 
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;