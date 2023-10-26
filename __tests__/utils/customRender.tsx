import { CityProvider } from "@contexts/CityContext";
import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

function Providers({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
}

const customRender = (
  ui: React.ReactElement,
  options?: Record<string, unknown>
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { customRender as render, Providers };
