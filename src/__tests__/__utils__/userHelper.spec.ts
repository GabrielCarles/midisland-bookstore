import { getItem, setItem } from "services/util/localStorageHelper";
import {
  checkForUser,
  getUsers,
  signUp,
  logOut,
  getAuth,
  getUser,
} from "services/util/userHelper";

const user = {
  user: "user",
  email: "asd@asd",
  password: "password",
  type: "type",
  userId: 0,
};

afterEach(() => {
  global.localStorage.clear();
});

test("logOut function removes token", () => {
  setItem("auth-token", "");
  logOut();
  expect(getItem("auth-token")).toBeFalsy();
});

test("signUp function adds the user", () => {
  signUp(user);
  expect(getUsers()).toHaveLength(1);
});

describe("getAuth function:", () => {
  test("returns empty string if none found", () => {
    expect(getAuth()).toBe("");
  });
  test("returns auth when found", () => {
    setItem("auth-token", "1");
    expect(getAuth()).toBe("1");
  });
});

test("getUser function: gets the information from the user thats logged in", () => {
  signUp(user);
  setItem("auth-token", "1");
  expect(getUser()).toBeTruthy();
});

describe("checkForUser function:", () => {
  const loginInfo = { email: "asd@asd", password: "password" };
  test("returns false if theres no users", () => {
    expect(checkForUser(loginInfo)).toBeFalsy();
  });

  test("returns the user when it exists and sets auth-token", () => {
    signUp(user);
    expect(checkForUser(loginInfo)).toBeTruthy();
    expect(getItem("auth-token")).toBeTruthy();
  });

  test("returns false if login info is incorrect", () => {
    signUp(user);
    loginInfo.password = "1";
    expect(checkForUser(loginInfo)).toBeFalsy();
  });
});
