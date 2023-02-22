import React from "react";
import { CityType } from "types/cityType";
import CardGridLayout from "./layout/CardGridLayout";
import WeatherIcon from "./WeatherIcon";

type Props = {
  selectedCity: CityType;
};

function WeatherCard({ selectedCity }: Props) {
  return (
    <CardGridLayout>
      <div className="flex h-2/3 w-full items-center">
        <WeatherIcon lon={selectedCity.lon} lat={selectedCity.lat} />
      </div>

      <div className="h-1/3">
        <p className="flex h-5/6 items-center truncate pb-1 text-2xl font-bold underline decoration-blue-800 decoration-4 underline-offset-4">
          {selectedCity.name} - {selectedCity.country}
        </p>
        {selectedCity.state && (
          <p className="h-1/6 text-xs italic">{selectedCity.state}</p>
        )}
      </div>
    </CardGridLayout>
  );
}

export default WeatherCard;
