const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "You are a product developer. Generate a brief description of the products materials, dimensions, features, and target market.";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
