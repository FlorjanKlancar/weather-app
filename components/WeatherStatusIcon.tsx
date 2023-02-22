import React, { ReactNode } from "react";

type Props = {
  cardTitle: string;
  cardValue: number;
  symbol: string | ReactNode;
};

function WeatherStatusIcon({ cardTitle, cardValue, symbol }: Props) {
  return (
    <div className="flex flex-col text-center">
      <p className="text-xs text-slate-400 md:text-sm">{cardTitle}</p>
      <p className="text-base font-semibold text-white md:text-xl">
        {`${cardValue.toFixed(0)} ${symbol}`}
      </p>
    </div>
  );
}

export default WeatherStatusIcon;
