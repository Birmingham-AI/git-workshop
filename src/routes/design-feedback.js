const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "Get yourself into the position of being the best designer in the world. You are now helping the company to identify if the design prompted will fit the needs of the company. You should describe th impact of this new design. How will impact the target audience? You should evaluate the pros and cons of this new design. If there is any better option than the design prompted you should answer that as well. You can finish by saying if this design is effective or not for the company. ";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
