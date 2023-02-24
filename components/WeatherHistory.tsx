import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { CityType } from "types/cityType";
import CardGridLayout from "./layout/CardGridLayout";

type Props = {
  selectedCity: CityType | null;
  setSelectedCity: (selectedCity: CityType) => void;
};

function WeatherHistory({ selectedCity, setSelectedCity }: Props) {
  const [cities, setCities] = useState<CityType[]>([]);

  const updateStateAndLocalStorage = (selectedCity: CityType) => {
    const findItemInCities = cities.find(
      (city) =>
        selectedCity.name.toLowerCase() === city.name.toLowerCase() &&
        selectedCity.state === city.state
    );

    if (findItemInCities) return;

    if (cities.length >= 5) {
      const newCities = cities.slice(1).concat(selectedCity);
      setCities(newCities);
      localStorage.setItem("cities", JSON.stringify(newCities));
    } else {
      setCities(cities.concat(selectedCity));
      localStorage.setItem(
        "cities",
        JSON.stringify(cities.concat(selectedCity))
      );
    }
  };

  const isCityActive = (city: CityType) => {
    if (!(city.lat === selectedCity?.lat && city.lon === selectedCity.lon))
      return false;

    return true;
  };

  useEffect(() => {
    if (selectedCity) {
      updateStateAndLocalStorage(selectedCity);
    }
  }, [selectedCity]);

  useEffect(() => {
    const cities = localStorage.getItem("cities");

    if (cities) setCities(JSON.parse(cities));
  }, []);

  return (
    <CardGridLayout>
      <div className="h-1/4">
        <h1 className="text-xl">Search History</h1>
      </div>

      <div className="h-full w-full">
        {cities.length ? (
          <ul role="list" className="w-full divide-y divide-slate-600">
            {cities.map((city, i: number) => (
              <li key={i} className="flex items-center py-1">
                <button
                  className="flex h-8 w-24 items-center justify-center space-x-1 rounded-lg border border-blue-800 bg-blue-800 text-sm shadow-md transition-all duration-200 hover:bg-blue-900 disabled:border-blue-800 disabled:bg-slate-800"
                  disabled={isCityActive(city)}
                  onClick={() => setSelectedCity(city)}
                >
                  {isCityActive(city) ? (
                    <CheckCircleIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDoubleUpIcon className="h-4 w-4" />
                  )}
                  <span>{isCityActive(city) ? "Selected" : "Select"}</span>
                </button>

                <div className="ml-4 truncate">
                  <p className=" text-sm font-medium text-white">
                    {city.name} - {city.country}
                  </p>
                  {city.state && <p className="text-xs">{city.state}</p>}
                  <p className="text-sm text-gray-500">
                    Coordinates: {city.lat.toFixed(2)} - {city.lon.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p className="text-center text-xs text-slate-400">
              No history yet...
            </p>
          </div>
        )}
      </div>
    </CardGridLayout>
  );
}

export default WeatherHistory;
