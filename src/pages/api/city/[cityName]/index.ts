// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CityType } from "types/cityType";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const { cityName } = req.query;

      if (!cityName)
        return res.status(404).json({ message: "City name was not provided!" });

      try {
        const response = await fetchCities(cityName.toString());

        return res.status(200).json(response.data as CityType[]);
      } catch (error) {
        const err = error as AxiosError;

        return res.status(err.response!.status).send(err.response!.statusText);
      }
    }

    default:
  }
}

const fetchCities = async (cityName: string) => {
  const respose = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.WEATHER_API_KEY}`
  );

  return respose;
};
