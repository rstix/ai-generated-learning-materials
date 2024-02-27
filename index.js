import express from "express";
import path from "path";
// import OpenAI from "openai";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import texts from "./texts.js";

dotenv.config();

const app = express();

// runs with every request and parses the body to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serving public folder
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "public")));

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const genAI = new GoogleGenerativeAI(process.env.GEMINNI_API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const prompt =
//     "What are closures in Javascript in simple words with analogy in 150 words. Without an example.";

//   // const result = await model.generateContent(prompt);
//   const result = await model.generateContentStream(prompt);
//   let text = "";
//   for await (const chunk of result.stream) {
//     console.log(chunk);
//     const chunkText = chunk.text();
//     console.log(chunkText);
//     text += chunkText;
//   }
// }

// run();

const generateText = async (req, res) => {
  const { prompt, size } = req.body;

  //   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    // const result = await model.generateContentStream(prompt)
    // let text = "";
    // for await (const chunk of result.stream) {
    //   console.log(chunk)
    //   const chunkText = chunk.text();
    //   console.log(chunkText);
    //   text += chunkText;
    // }
    setTimeout(() => {
      // Simulate successful completion after 1 second
    //   text =
    //     "Yes, you can sort a Map in JavaScript. However, it's important to note that Map objects are inherently unordered collections of key-value pairs, meaning they do not guarantee any specific order of iteration. But if you want to sort the entries of a Map based on certain criteria, you can convert it to an array of entries, sort that array, and then create a new Map from the sorted array.";
      res.status(200).json({
        success: true,
        data: texts[Math.floor(Math.random() * texts.length)],
      });
    }, 1000);
  } catch (error) {
    if (error.response) {
      console.log(1, error.response.status);
      console.log(2, error.response.data);
    } else {
      console.log(3, error.message);
    }

    res.status(400).json({
      success: false,
      error: "The text could not be generated",
    });
  }
};

app.post("/question", generateText);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server listenig on ${port}`);
});
