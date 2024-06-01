const openAi = require("openai");
const { openaiApiKey } = require("../config/env");

const openai = new openAi({
  apiKey: openaiApiKey,
});

const generateCompletion = async (prompt, context) => {
  try {
    const fullPrompt = `${prompt} ${context}`;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You're a helpful assistant that assists engineering and industrial design students. They'll provide context, but you'll need to provide the information they're looking for.",
        },
        {
          role: "user",
          content: fullPrompt,
        },
      ],
      max_tokens: 500,
    });
    const results = response.choices[0].message.content;
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  generateCompletion,
};
