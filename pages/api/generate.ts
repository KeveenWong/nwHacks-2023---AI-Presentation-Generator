// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { slides_v1 } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next'
import {createPresentation, createTwoColumnSlide} from '../../util/googleslides';

type RequestData = {
  
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== 'POST') return res.status(405).end();

  const [link, id] = await createPresentation("TESTETSTTEST", [[
    "TITLE", "HELLO TEST", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  ]]);
  console.log(link);
  // await createTwoColumnSlide(id || "", "HELLO TEST", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png")
  // console.log(link);
  return res.status(200).end();
}
