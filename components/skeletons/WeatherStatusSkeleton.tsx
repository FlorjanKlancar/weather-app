import CardGridLayout from "components/layout/CardGridLayout";
import React from "react";

function WeatherStatusSkeleton() {
  return (
    <CardGridLayout>
      <div className="grid grid-cols-2 gap-14">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-2 text-center">
            <p className="h-4 w-12 animate-pulse rounded-lg bg-slate-900" />
            <p className="w-18 h-8 animate-pulse rounded-lg bg-slate-900" />
          </div>
        ))}
      </div>
    </CardGridLayout>
  );
}

export default WeatherStatusSkeleton;
