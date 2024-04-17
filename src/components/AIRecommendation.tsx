import OpenAI from 'openai';

const openai = new OpenAI({});

export default async function AIRecommendation() {
  const embedding = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: 'Your text string goes here',
    encoding_format: 'float',
  });

  console.log(embedding);
}
