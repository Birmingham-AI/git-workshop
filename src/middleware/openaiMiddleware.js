const { generateCompletion } = require("../services/openaiService");

const createOpenAIMiddleware = (hardcodedPrompt) => {
  return async (req, res) => {
    try {
      const { context } = req.body;
      const response = await generateCompletion(hardcodedPrompt, context);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = createOpenAIMiddleware;
