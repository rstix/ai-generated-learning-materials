// import openai from './config/openai.js';

// async function main() {
//   const completion = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: "What is the capital of Germany?",
//   });

//   const completionText = completion.data.choices[0].message.content;

//   console.log(completionText)
// }

// main()

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPEN_AI_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });

  // const completionText = completion.data.choices[0].message.content;

  console.log(chatCompletion)
}

main();