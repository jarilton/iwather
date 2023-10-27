import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "São Paulo",
  sys: {
    country: "BR",
  },
  coord: {
    lat: -23.55,
    lon: -46.64,
  },
};
