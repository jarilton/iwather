import { isDayTime } from "./isDayTime";
describe("isDayTime", () => {
  it("should return true if it is day time", () => {
    // Defina manualmente o horário para um momento durante o dia (entre 6 e 18 horas)
    jest.spyOn(Date.prototype, "getHours").mockReturnValue(12);

    const result = isDayTime();
    expect(result).toBe(true);
  });

  it("should return false outside of daytime", () => {
    // Defina manualmente o horário para um momento fora do horário do dia (antes das 6h ou após as 18h)
    jest.spyOn(Date.prototype, "getHours").mockReturnValue(20);

    const result = isDayTime();
    expect(result).toBe(false);
  });

  afterEach(() => {
    // Restaure a implementação original de Date.getHours após cada teste
    jest.restoreAllMocks();
  });
});
