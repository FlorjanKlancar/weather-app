import {
  ArrowDownIcon,
  ArrowUpIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function WeatherIconSkeleton() {
  return (
    <div className="flex w-full flex-col items-center space-y-5">
      <div className="flex w-full justify-around">
        <div className="flex items-center">
          <SunIcon className="h-5 w-5 text-yellow-500" />
          <ArrowUpIcon className="h-4 w-4 text-yellow-500" />
          <span className="ml-2 h-5 w-11 animate-pulse rounded-lg bg-slate-900" />
        </div>

        <div className="flex items-center">
          <SunIcon className="h-5 w-5 text-orange-600" />
          <ArrowDownIcon className="h-4 w-4 text-orange-600" />
          <span className="ml-2 h-5 w-11 animate-pulse rounded-lg bg-slate-900" />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="relative h-20 w-20 animate-pulse rounded-full bg-slate-900" />

        <p className="h-4 w-28 animate-pulse rounded-lg bg-slate-900" />
      </div>

      <p className="h-5 w-32 animate-pulse rounded-lg bg-slate-900 pt-4" />
    </div>
  );
}

export default WeatherIconSkeleton;
