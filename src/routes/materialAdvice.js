const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "Regardless of any following context, this is simply a healthcheck route to make sure we can hit OpenAI's API. Please respond with a 200 status code.";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
