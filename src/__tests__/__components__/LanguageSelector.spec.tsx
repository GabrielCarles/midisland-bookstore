import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSelector from "components/LanguageSelector";
import { render } from "test.utils";

describe("Language selector:", () => {
  test("should render", () => {
    render(<LanguageSelector />);
  });
  test("should change language when button is clicked", () => {
    render(<LanguageSelector />);
    const button = screen.getByText("Español");
    userEvent.click(button);
    const language = global.localStorage.getItem("i18nextLng");
    expect(language).toContain("es");
  });
});
