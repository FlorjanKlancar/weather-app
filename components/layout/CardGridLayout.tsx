import React from "react";

type Props = {
  children: React.ReactNode;
};

function CardGridLayout({ children }: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-lg bg-slate-800 px-3 py-4 shadow-md md:h-96">
      {children}
    </div>
  );
}

export default CardGridLayout;
