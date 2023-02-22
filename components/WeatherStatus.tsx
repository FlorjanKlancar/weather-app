import { useWeather } from "hooks/useWeather";
import React from "react";
import { CityType } from "types/cityType";
import CardGridLayout from "./layout/CardGridLayout";
import WeatherStatusSkeleton from "./skeletons/WeatherStatusSkeleton";
import WeatherStatusIcon from "./WeatherStatusIcon";

type Props = {
  selectedCity: CityType;
};

function WeatherStatus({ selectedCity }: Props) {
  const { data, isLoading } = useWeather(selectedCity.lon, selectedCity.lat);

  if (isLoading || !data) return <WeatherStatusSkeleton />;

  const weatherStatusValues = [
    {
      title: "Temperature",
      value: data.main.temp,
      symbol: "\u00b0C",
    },
    { title: "Feels like", value: data.main.feels_like, symbol: "\u00b0C" },
    { title: "Temperature min", value: data.main.temp_min, symbol: "\u00b0C" },
    { title: "Temperature max", value: data.main.temp_max, symbol: "\u00b0C" },
    { title: "Humidity", value: data.main.humidity, symbol: "%" },
    {
      title: "Pressure",
      value: data.main.pressure,
      symbol: "mbar",
    },
  ];

  return (
    <CardGridLayout>
      <div className="grid grid-cols-2 gap-14">
        {weatherStatusValues.map((value, i: number) => (
          <WeatherStatusIcon
            key={i}
            cardTitle={value.title}
            cardValue={value.value}
            symbol={value.symbol}
          />
        ))}
      </div>
    </CardGridLayout>
  );
}

export default WeatherStatus;
