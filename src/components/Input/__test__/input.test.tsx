import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should be able to render without activity indicator if isLoading props is undefined", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("input-activity-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should be able to render with activity indicator if isLoading props is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("input-activity-indicator");

    expect(activityIndicator).toBeTruthy();
  });
});
