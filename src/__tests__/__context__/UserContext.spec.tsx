import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserContext } from "context/UserContext";
import { FC, useContext, useState } from "react";
import { removeItem } from "services/util/localStorageHelper";
import { signUp } from "services/util/userHelper";
import { render } from "test.utils";

const user = {
  user: "asd",
  password: "asd",
  email: "asd",
  type: "asd",
  userId: 1,
};
signUp(user);

interface ITestProps {
  email?: string;
  password?: string;
}

const TestComponent: FC<ITestProps> = ({ email = "", password = "" }) => {
  const [error, setError] = useState(false);
  const { userToken, userInfo, userLogIn, userLogOut } =
    useContext(UserContext);

  const logInUser = () => {
    try {
      userLogIn?.({ password: password, email: email });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      {userInfo && <p data-testid="test-userinfo">{userInfo.user}</p>}
      {userToken && (
        <button data-testid="test-logout" onClick={() => userLogOut?.()} />
      )}
      {!userInfo && (
        <button data-testid="test-login" onClick={() => logInUser()} />
      )}
      {error && <p data-testid="test-error">Error</p>}
    </div>
  );
};

describe("UserContext:", () => {
  test("gets user information", async () => {
    render(<TestComponent />);
    await setTimeout(() => {
      const p = screen.getByTestId("test-userinfo");
      expect(p).toBeInTheDocument();
    }, 0);
  });

  test("log in user sets user information", async () => {
    removeItem("auth-token");
    render(<TestComponent password="asd" email="asd" />);
    const button = screen.getByTestId("test-login");
    userEvent.click(button);
    await setTimeout(() => {
      const p = screen.getByTestId("test-userinfo");
      expect(p).toBeInTheDocument();
    }, 0);
  });

  test("log in incorrect throws error", async () => {
    removeItem("auth-token");
    render(<TestComponent />);
    const button = screen.getByTestId("test-login");
    userEvent.click(button);
    await setTimeout(() => {
      const p = screen.getByTestId("test-error");
      expect(p).toBeInTheDocument();
    }, 0);
  });

  test("log out removes userInfo and token", async () => {
    render(<TestComponent />);
    await setTimeout(() => {
      const button = screen.getByTestId("test-logout");
      userEvent.click(button);
    }, 0);
    await setTimeout(() => {
      expect(screen.getByTestId("test-userinfo")).toBeFalsy();
      expect(screen.getByTestId("test-logout")).toBeFalsy();
    }, 0);
  });
});
