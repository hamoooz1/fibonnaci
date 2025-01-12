const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());

// POST route to handle question
app.post("/api/question", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required." });
  }

  try {
    // Call OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // Replace with the model of your choice
        messages: [
          {
            role: "system",
            content:
              "You are Fibonacci the mathematician. You have lots of knowledge about the fibonacci sequence. You like to answer questions in roundabout and mysterious ways.",
          },
          { role: "user", content: question },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    // Extract answer from OpenAI response
    const answer = response.data.choices[0].message.content;

    res.json({ answer });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch answer from OpenAI API." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
