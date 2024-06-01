const express = require("express");
// Import (Require) your routes here
const healthcheck = require("./routes/healthcheck");

const app = express();

app.use(express.json());

// Add your routes below
app.use("/healthcheck", healthcheck);

module.exports = app;
