import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const city: CityProps = {
  id: "1",
  name: "São Paulo",
  latitude: 123,
  longitude: 456,
};

describe("Storage: CityStorage", () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return a city storaged", async () => {
    await saveStorageCity(city);

    const response = await getStorageCity();

    expect(response).toEqual(city);
  });

  it("should be remove city storaged", async () => {
    await saveStorageCity(city);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
