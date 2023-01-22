import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";
import tokenFile from '../../../openai-token.json';

const configuration = new Configuration({
  apiKey: tokenFile.token,
});
const openai = new OpenAIApi(configuration);

export async function generateText(prompt: string) {
    try {
        console.log(prompt);
        const response = await openai.createCompletion(
          {
            model: 'text-davinci-003',
            max_tokens: 1500,
            temperature: 0.7,
            top_p: 1,
            prompt
          }
        );
        // check if the request was successful
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        // console.log(response.data);
        return response.data.choices[0].text;

      } catch (err) {
        console.log(err);
        return '';
      }
}