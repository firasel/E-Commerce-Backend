const express = require("express");
const connectWithDb = require("./config/db");
const SendResponse = require("./helper/SendResponse");
const app = express();
require("dotenv").config();
app.use(express.json());

const productHandler = require("./routeHandler/productHandler");

const port = process.env.PORT || 3000;
const api = process.env.API_URL;

// Product Route
app.use(`${api}/product`, productHandler);

// Error handle
app.use((err, req, res, next) => {
  console.log(err);
  if (err) {
    res.status(500).send(SendResponse(false, "Getting an Error"));
  } else {
    res.status(500).send(SendResponse(false, "Getting an Errors"));
  }
});

// Application running function
const AppListenFunc = () =>
  app.listen(port, () => console.log(`App Listening On Port ${port}`));

// Connect with databese and run the application
connectWithDb(AppListenFunc);
