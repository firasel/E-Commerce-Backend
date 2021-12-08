const express = require("express");
const FileUpload = require("../controller/FileUpload/FileUpload");
const router = express.Router();

// Product Add
router.post("/upload", FileUpload);

module.exports = router;