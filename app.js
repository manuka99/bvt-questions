const express = require("express");
const cors = require("cors");
const AppRoutes = require("./routes");
var fileupload = require("express-fileupload");
const { HandleError } = require("./middlewares/HandleError");

// init the app
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload());

/* ROUTES */
AppRoutes(app);

/* ERRORS */
app.use(HandleError);

module.exports = app;
