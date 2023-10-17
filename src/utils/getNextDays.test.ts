import { getNextDays } from "./getNextDays";

test("should return next 5 days", () => {
  const days = getNextDays();

  expect(days).toHaveLength(5);
});
