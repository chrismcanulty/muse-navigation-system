import OpenAI from 'openai';
import { OPEN_AI_INSTRUCTIONS } from '../constants/constants';

const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
  // Need to toggle dangerouslyAllowBrowser to true to test the API. Best practice would be
  // to have a separate server file structure that could be called to retrieve the API key
  // in order to ensure security of the key. Storing this key in the frontend, even in .env file
  // is risky and not recommended.
  dangerouslyAllowBrowser: true,
});

export const openAi = (input: string) => {
  return openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: OPEN_AI_INSTRUCTIONS,
      },
      {
        role: 'user',
        content: input,
      },
    ],
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1,
  });
};
