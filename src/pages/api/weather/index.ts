// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const { lat, lon } = req.query;
      if (!lat || !lon)
        return res.status(500).json({ message: `Parameters missing` });

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );

        return res.status(200).json(response.data);
      } catch (error) {
        const err = error as AxiosError;

        return res.status(err.response!.status).send(err.response!.statusText);
      }
    }

    // handle other HTTP methods
    default:
      res.status(200).json({ message: "Welcome to API Routes!" });
  }
}
