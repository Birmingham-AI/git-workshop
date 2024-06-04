const express = require("express");
// Import (Require) your routes here
const healthcheck = require("./routes/healthcheck");
const testingForInterns = require("./routes/testingForInterns");
const designFeedback = require("./routes/design-feedback");

const app = express();

app.use(express.json());

// Add your routes below
app.use("/healthcheck", healthcheck);
app.use("/testing-for-interns", testingForInterns);
app.use("/design-feedback", designFeedback);

module.exports = app;
