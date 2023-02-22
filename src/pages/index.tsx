import AppLayout from "components/layout/AppLayout";
import NoSelectedCity from "components/NoSelectedCity";
import Select from "components/Select";
import WeatherCard from "components/WeatherCard";
import WeatherHistory from "components/WeatherHistory";
import WeatherStatus from "components/WeatherStatus";
import { useRef, useState } from "react";
import { CityType } from "types/cityType";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <AppLayout>
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:my-12 lg:grid-cols-3 lg:gap-20">
        {selectedCity !== null ? (
          <>
            <div className="order-2 lg:order-1">
              <WeatherStatus selectedCity={selectedCity} />
            </div>
            <div className="order-1 lg:order-2">
              <WeatherCard selectedCity={selectedCity} />
            </div>
          </>
        ) : (
          <div className="col-span-2">
            <NoSelectedCity handleClick={handleClick} />
          </div>
        )}
        <div className="order-3">
          <WeatherHistory
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </div>
      </div>

      <Select
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        inputRef={inputRef}
      />
    </AppLayout>
  );
}
