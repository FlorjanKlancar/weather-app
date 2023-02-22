import { Fragment, RefObject, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { CityType } from "types/cityType";

type Props = {
  selectedCity: CityType | null;
  setSelectedCity: (selected: CityType | null) => void;
  inputRef: RefObject<HTMLInputElement>;
};

export default function Select({
  selectedCity,
  setSelectedCity,
  inputRef,
}: Props) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownValues, setDropdownValues] = useState<CityType[]>([]);

  const onChangeDebounceHandler = async (searchString: string) => {
    if (!searchString) return;

    try {
      const response = await axios.get(`/api/city/${searchString}`);
      setDropdownValues(response.data);
    } catch (error: unknown) {
      setDropdownValues([]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (query.length > 1) setIsLoading(true);

    const timeout = setTimeout(() => onChangeDebounceHandler(query), 1000);

    return () => {
      clearTimeout(timeout);
      setIsLoading(false);
    };
  }, [query]);

  const resetSelect = () => {
    setSelectedCity(null);
    setQuery("");
  };

  useEffect(() => {
    onChangeDebounceHandler("London");
  }, []);

  return (
    <div className="mt-10 flex h-10 items-center space-x-3">
      <Combobox value={selectedCity} onChange={setSelectedCity}>
        <div className="relative mt-1 h-full flex-1">
          <div className="relative h-full w-full cursor-default overflow-hidden rounded-lg text-left shadow-md sm:text-sm">
            <Combobox.Input
              className="h-full w-full border-none bg-slate-800 py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
              displayValue={(city: CityType) =>
                city !== null
                  ? ` ${city.name} - ${city.country} ${
                      city.state ? `- ${city.state}` : ""
                    }`
                  : ""
              }
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
              ref={inputRef}
              placeholder="Search for cities"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => resetSelect}
          >
            {isLoading ? (
              <Combobox.Options className="absolute mt-1 max-h-60  w-full divide-y divide-slate-700 overflow-auto rounded-md bg-slate-800 py-1 text-base text-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <div className="relative animate-pulse cursor-default select-none py-2 px-4">
                  Loading...
                </div>
              </Combobox.Options>
            ) : (
              <Combobox.Options className="absolute mt-1 max-h-60  w-full divide-y divide-slate-700 overflow-auto rounded-md bg-slate-800 py-1 text-base text-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {dropdownValues.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4">
                    Nothing found.
                  </div>
                ) : (
                  dropdownValues.map((city, i: number) => (
                    <Combobox.Option
                      key={i}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-blue-800 text-white" : ""
                        }`
                      }
                      value={city}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {` ${city.name} - ${city.country} ${
                              city.state ? `- ${city.state}` : ""
                            }`}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            )}
          </Transition>
        </div>
      </Combobox>

      <button
        className="h-full w-24 rounded-lg border-2 border-blue-800 py-2 leading-5 shadow-md transition-all duration-200 hover:bg-blue-800"
        onClick={() => setSelectedCity(null)}
      >
        Clear
      </button>
    </div>
  );
}
