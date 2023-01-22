// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { slides_v1 } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next'
import {createPresentation, createTwoColumnSlide} from '../../util/googleslides';
import { DalleAPI } from './images/generate';
import { generateText } from './text/generateText';
import parseText from './text/parser';

type Req = {
  title: string;
  topics: string;
  keywords: string;
  nslides: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body) as Req;
  const prompt = `I want to make a slideshow presentation titled ${data.title}. The slideshow should include topics such as ${data.topics}. Keywords that should be included are: ${data.keywords}. Can you please generate ${data.nslides} slides worth of presentable content, each slide containing the following parameters:

  - A title 
  - Bullet points relevant to the current slide
  - A description of a good image to use for the current slide

  Can you format these parameters to be in the format of the following so I can automate the creation of the slides:
  $Title: __
  $Bullet points: __
  $Image: __

  There should be an intro slide and a conclusion slide.`

  if(req.method !== 'POST') return res.status(405).end();
  const text = await generateText(prompt);
  const data2 = parseText(text);
  
  const [link, id] = await createPresentation("TESTETSTTEST", 
    await Promise.all(data2.map(async d=>[d.title, d.bulletPoints.join('\n'), await DalleAPI.generateImage(d.image)]))
  );
  console.log(link);
  return res.status(200).end();
}
