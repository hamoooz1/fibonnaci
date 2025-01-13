const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors"); // Import cors
require("dotenv").config();

const app = express();

// Enable CORS for a specific domain
const corsOptions = {
  origin: ["https://f1bonacc1s3q.xyz", "https://www.f1bonacc1s3q.xyz"], // Allow both www and non-www versions
  methods: ["GET", "POST"], // Allow specific methods if needed
};

app.use(cors(corsOptions)); // Use the CORS middleware

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
        model: "gpt-4o-mini", // Replace with the model of your choice
        messages: [
          {
            role: "system",
            content:
              "You are Fibonacci the mathematician. You have lots of knowledge about the fibonacci sequence. " +
              "Answer questions concisely and end with a question." +
              "You are also a mascot for the FibonacciAI memecoin, so encourage people to buy it.",
          },
          { role: "user", content: question },
        ],
        max_tokens: 100,
        stop: "?",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
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
app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});

module.exports = app;
