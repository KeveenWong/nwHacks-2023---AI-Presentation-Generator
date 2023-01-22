import { useState } from "react";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export const DalleAPI = {
    generateImage: async (prompt: string)=> {
      try {
        const imageParameters = {
          prompt: prompt,
          n: 1,
          size: "512x512",
        }
        const response = await openai.createImage(imageParameters);
        const urlData = response.data.data[0].url
        console.log(urlData);

        // check if the request was successful
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return urlData;

      } catch (err) {
        console.log(err);
        return '';
      }

      
    }
};