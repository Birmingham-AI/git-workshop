
const express = require("express");
// Import (Require) your routes here
const healthcheck = require("./routes/healthcheck");
const testingForInterns = require("./routes/testingForInterns");
const engineeringproblemsolver = require("./routes/engineeringProblemSolver");


const app = express();

app.use(express.json());

// Add your routes below
app.use("/healthcheck", healthcheck);
app.use("/testing-for-interns", testingForInterns);
app.use("/engineering-solution",engineeringproblemsolver);

module.exports = app;
