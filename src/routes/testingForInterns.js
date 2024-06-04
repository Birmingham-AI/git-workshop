const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt = "This is just a demo branch: tell me a joke about git.";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
