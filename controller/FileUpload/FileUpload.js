const SendResponse = require("../../helper/SendResponse");
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine }).single("image");

const FileUpload = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      res.status(500).send(SendResponse(false, "File Upload Not Success"));
    } else {
      res.status(200).send(SendResponse(true, "File Upload Successful"));
    }
  });
};
module.exports = FileUpload;
