import express from "express";
import path from "path";
// import OpenAI from "openai";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

// runs with every request and parses the body to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'public')));

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINNI_API_KEY);

// const generationConfig = {
//   stopSequences: ["red"],
//   // maxOutputTokens: 400,
//   temperature: 0.9,
//   topP: 0.1,
//   topK: 16,
// };


async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "What are closures in Javascript in simple words with analogy in 150 words. Without an example."

  // const result = await model.generateContent(prompt);
  const result = await model.generateContentStream(prompt)
  let text = '';
  for await (const chunk of result.stream) {
    console.log(chunk)
    const chunkText = chunk.text();
    console.log(chunkText);
    text += chunkText;
  }

  // console.log("DONE");
}

function typeText(text, delay = 4) {
  let index = 0;
  // console.log(text)

  function typeNextCharacter() {
    if (index < text.length) {
      // Print the next character
      process.stdout.write(text[index]);
      index++;
      // Call typeNextCharacter recursively after the delay
      setTimeout(typeNextCharacter, delay);
    }
    // else {
    //   // Print a newline character when typing is complete
    //   console.log();
    // }
  }

  // Start typing the text
  typeNextCharacter();
}

// run();

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
