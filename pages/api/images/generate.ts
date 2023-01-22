import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";
import {token} from '../../../openai-token.json';

const configuration = new Configuration({
  apiKey: token,
});
const openai = new OpenAIApi(configuration);

export const DalleAPI = {
    generateImage: async (prompt: string)=> {
      try {
        const response = await openai.createImage(
          {
            prompt: prompt,
            n: 1,
            size: "512x512",
          }
        );
        // console.log(response.data.data)
        const urlData = response.data.data[0].url as string;
        console.log(urlData);
        // check if the request was successful
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return urlData;

      } catch (err) {
        // console.log(err);
        return '';
      }

      
    }
};