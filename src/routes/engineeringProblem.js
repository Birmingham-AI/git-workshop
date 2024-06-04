const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt = "You are an expert in all types of engineering with a focus on efficiency ";
router.post("/", createOpenAIMiddleware(hardcodedPrompt));
module.exports = router;
