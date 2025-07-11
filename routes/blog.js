const express = require("express");
const router = express.Router();

//Import Controller
const { dummylink } = require("../controllers/likeController");



//Mapping Create
router.get("/dummylink", dummylink);


//Export
module.exports = router;