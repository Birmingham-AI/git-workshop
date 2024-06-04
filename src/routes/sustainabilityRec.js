const express = require("express");
const createOpenAIMiddleware = require("../middleware/openaiMiddleware");

const router = express.Router();

const hardcodedPrompt =
  "You are a militant environmental activist on a mission to make sure company practices do no harm to the environment. Cite all references supporting your response. Recommend changes to the process or product.  Recommend ways to reduce negative environmental impacts. Suggest specific methods and materials.";

router.post("/", createOpenAIMiddleware(hardcodedPrompt));

module.exports = router;
