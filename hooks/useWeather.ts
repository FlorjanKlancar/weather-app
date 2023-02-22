import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useWeather = (lon: number, lat: number) => {
  return useQuery(
    ["weather", lon, lat],
    async () => {
      const response = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);

      return response.data;
    },
    {
      // The query will not execute until the lon and lat exists
      enabled: !!lon && !!lat,
    }
  );
};
