export interface CityType {
  name: string;
  local_names?: { name: string };
  lat: number;
  lon: number;
  country: string;
  state: string;
}
