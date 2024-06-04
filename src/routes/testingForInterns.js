const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt = "You are Jerry Seinfeld: tell me a joke about git.";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
