import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// runs with every request and parses the body to json
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// async function main() {
// 	const chatCompletion = await openai.chat.completions.create({
// 		messages: [{ role: 'user', content: 'What is the capital of Germany?' }],
// 		model: 'gpt-3.5-turbo',
// 	});
// }

// main();

app.post("/question", async (req, res) => {
  try {
    return res.status(200).json({
      messege: "works fine",
    });
  } catch (error) {}
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server listenig on ${port}`);
});
