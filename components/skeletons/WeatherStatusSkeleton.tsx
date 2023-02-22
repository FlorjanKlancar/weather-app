import CardGridLayout from "components/layout/CardGridLayout";
import React from "react";

function WeatherStatusSkeleton() {
  return (
    <CardGridLayout>
      <div className="grid grid-cols-2 gap-5 py-2 md:gap-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <p className="h-5 w-24 animate-pulse rounded-lg bg-slate-900" />
            <p className="h-8 w-16 animate-pulse rounded-lg bg-slate-900" />
          </div>
        ))}
      </div>
    </CardGridLayout>
  );
}

export default WeatherStatusSkeleton;
