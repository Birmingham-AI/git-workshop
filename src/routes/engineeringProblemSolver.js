const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "You are an experienced engineer, you have a Ph.D in mechanical engineering. You have a client that wants to build a solar powered outdoor grill area. Present an idea and a plan to execute this concept to your client including materials and estimated costs.";


router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
