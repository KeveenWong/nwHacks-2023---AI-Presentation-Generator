export const generateImage = {
    generateImage: async (prompt: string, apiKey: string): Promise<string> => {
      try {
        // make a post request to the DALL-E API endpoint
        const response = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({prompt: prompt}),
        });
  
        // check if the request was successful
        if (!response.ok) {
            throw new Error(response.statusText);
        }
  
        // parse the json response 
        const data = await response.json();
        // return the generated image
        return data.data.url;
      } catch (err) {
        console.log(err);
        return '';
      }
    }
  };
  