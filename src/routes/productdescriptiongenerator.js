const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "Generate a short description about the product's material, dimensions, features, and target market";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
