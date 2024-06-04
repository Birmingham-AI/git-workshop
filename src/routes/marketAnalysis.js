const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "You are a market analysis researcher with 25 years of experience. Your area of expertise are sustainability, eco-friendly consumer electronics, and the product development process. List out eco-friendly consumer electronics available on the market that utilyze AI and project trends for the next 5 to 10 years. ";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;