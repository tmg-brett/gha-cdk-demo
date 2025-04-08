type HelloEvent = {
  word: string;
}

export const handler = async (event: HelloEvent): Promise<string> => {
  try {
    console.log(`Received event: ${JSON.stringify(event)}`);
    console.log(`Hello ${event.word}`);
    console.log(`Hello ${event.word}`);
    return 'Success';
  } catch (error) {
    console.error(`Failed to process order: ${error instanceof Error ? error.message : 'Unknown error'}`);
    throw error;
  }
};
