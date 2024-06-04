const express = require("express");
// Import (Require) your routes here
const healthcheck = require("./routes/healthcheck");
const testingForInterns = require("./routes/testingForInterns");
const marketanalysis = require("./routes/marketAnalysis");
const productdescriptiongenerator = require("./routes/productdescriptiongenerator");
const sustainabilityRec = require("./routes/sustainabilityRec");
const designfeedback = require("./routes/design-feedback");
const app = express();

app.use(express.json());

// Add your routes below
app.use("/healthcheck", healthcheck);
app.use("/testing-for-interns", testingForInterns);
app.use("/market-analysis", marketanalysis);
app.use("/product-description",productdescriptiongenerator);
app.use("/sustainabilityRec", sustainabilityRec);
app.use("/design-feedback", designfeedback);
module.exports = app;
