import { render } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should be able to render without activity indicator", () => {
    const { debug } = render(<Input isLoading />);

    debug();
  });
});
