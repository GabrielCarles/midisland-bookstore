import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSelector from "components/ThemeSelector";
import { render } from "test.utils";

describe("Theme selector:", () => {
  test("should render", () => {
    render(<ThemeSelector />);
  });
  test("should change theme to dark when dark button is clicked", () => {
    render(<ThemeSelector />);
    const darkButton = screen.getByTestId("button-dark");
    userEvent.click(darkButton);
    const theme = global.localStorage.getItem("theme");
    expect(theme).toContain("dark");
  });
  test("should change theme to light when light button is clicked", () => {
    render(<ThemeSelector />);
    const lightButton = screen.getByTestId("button-light");
    userEvent.click(lightButton);
    const theme = global.localStorage.getItem("theme");
    expect(theme).toContain("light");
  });
});
