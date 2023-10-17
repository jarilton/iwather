import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("should return next 5 days", () => {
    const days = getNextDays();

    expect(days).toHaveLength(5);
  });
});
