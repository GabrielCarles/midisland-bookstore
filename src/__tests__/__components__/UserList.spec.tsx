import { screen } from "@testing-library/react";
import UserList from "components/UserList";
import { render } from "test.utils";

describe("User list:", () => {
  test("should render", () => {
    render(<UserList />);
  });

  test("should render list of users when received", async () => {
    const users = [
      {
        user: "asd",
        password: "asd",
        email: "asd",
        type: "asd",
        userId: "1",
      },
    ];
    
    global.localStorage.setItem("users", JSON.stringify(users));
    render(<UserList />);
    await expect(screen.getByTestId("user-list")).toBeInTheDocument()
  });

});
