import { useWeather } from "hooks/useWeather";
import Image from "next/image";
import React from "react";
import { SunIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import WeatherIconSkeleton from "./skeletons/WeatherIconSkeleton";

type Props = {
  lon: number;
  lat: number;
};

function WeatherIcon({ lon, lat }: Props) {
  const { data, isLoading } = useWeather(lon, lat);

  if (isLoading || !data) return <WeatherIconSkeleton />;

  const formatDate = (unixTimestamp: number) =>
    dayjs.unix(unixTimestamp).format("HH:mm");

  return (
    <div className="flex w-full flex-col lg:space-y-5">
      <div className="flex w-full justify-around">
        <div className="flex items-center">
          <SunIcon className="h-5 w-5 text-yellow-500" />
          <ArrowUpIcon className="h-4 w-4 text-yellow-500" />
          <span className="pl-2">{formatDate(data.sys.sunrise)}</span>
        </div>

        <div className="flex items-center">
          <SunIcon className="h-5 w-5 text-orange-600" />
          <ArrowDownIcon className="h-4 w-4 text-orange-600" />
          <span className="pl-2">{formatDate(data.sys.sunset)}</span>
        </div>
      </div>
      <div className="flex flex-col items-center lg:space-y-2">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-900">
          <Image
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            width={80}
            height={80}
            alt="icon"
          />
        </div>
        <p className="text-xs text-slate-400">
          {data.weather[0].main} - {data.weather[0].description}
        </p>
      </div>
      <p className="pt-4 text-center text-sm">Location name: {data.name}</p>
    </div>
  );
}

export default WeatherIcon;
