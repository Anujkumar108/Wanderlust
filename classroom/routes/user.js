const express  = require("express"); // import express
const router = express.Router(); //create a router instance


//Index - users 
router.get("/", (req, res) => {
    res.send("GET for users");
});

//Show - users
router.get("/:id", (req, res) => {
    res.send("GET for user id");
});

//POST - users
router.post("/", (req, res) => {
    res.send("POST for users");
});

//Delete - Users
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;