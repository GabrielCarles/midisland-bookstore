import { screen } from "@testing-library/react";
import UserSection from "components/UserSection";
import { signUp } from "services/util/userHelper";
import { render } from "test.utils";

const user = {
  user: "user",
  email: "asd@asd",
  password: "password",
  type: "type",
  userId: 0,
};

describe("UserSection:", () => {
  test("should render", () => {
    render(<UserSection />);
  });
  test("should show login and signup buttons", () => {
    render(<UserSection />);
    expect(screen.getByTestId("login-signup-buttons")).toBeInTheDocument();
  });
  test("should display logout button when user is logged in", async () => {
    signUp(user);
    render(<UserSection />);
    await setTimeout(() => {
      const button = screen.getByTestId("button-logout");
      expect(button).toBeInTheDocument();
    }, 0);
  });
});
