const mongoose = require("mongoose");

const uri = `mongodb://localhost:27017/E-Commerce`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectWithDb = async (AppListenFunc) => {
  mongoose.connect(uri, options, (err, db) => {
    if (err) {
      console.log("Database not connect due to an error");
    } else {
      console.log("Database connection successful");
      AppListenFunc();
    }
  });
};

module.exports = connectWithDb;
