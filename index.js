import { openai, supabase } from './config.js';
import podcasts from './content.js';

async function main(input) {
  const data = await Promise.all(
    input.map(async (textChunk) => {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: textChunk
      });

      return {
        content: textChunk,
        embedding: embeddingResponse.data[0].embedding // Ensure embedding is properly extracted
      };
    })
  );

  // Insert content and embedding into Supabase
  const { error } = await supabase.from('documents').insert(data);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Embedding and storing complete!');
  }
}

main(podcasts);
