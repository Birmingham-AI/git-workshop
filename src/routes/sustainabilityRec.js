const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "You must comply with published Environmental Protection Agency regulations.  Your job is to decrease waste from and use of power in the production process while increasing sustainability.  What changes would you make to accomplish this?  ";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
