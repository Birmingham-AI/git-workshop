const express = require("express");
// Import (Require) your routes here
const descriptionGen = require("./routes/descriptionGen");
const healthcheck = require("./routes/healthcheck");
const testingForInterns = require("./routes/testingForInterns");

const app = express();

app.use(express.json());

// Add your routes below
app.use("/healthcheck", healthcheck);
app.use("/testing-for-interns", testingForInterns);
app.use("/product-description", descriptionGen);

module.exports = app;
