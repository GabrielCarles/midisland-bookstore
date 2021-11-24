import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactChild, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "context/ThemeContext";
import FavoritesProvider from "context/FavoritesContext";
import UserProvider from "context/UserContext";

const AllProviders: FC = ({ children }) => {
  return (
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
