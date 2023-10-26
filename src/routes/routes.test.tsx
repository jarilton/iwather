import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from ".";

describe("Routes", () => {
  it("should be render search screen when not city selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });
});
