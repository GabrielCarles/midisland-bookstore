import { IUser, IUserLogin } from "interfaces/user";
import { getItem, removeItem, setItem } from "./localStorageHelper";

/* Here I would handle the Authentication proccess with the corresponding endpoints which would be defined
on the API folder. For the sake of the challenge, Im using local storage to store the user information along with 
all the other users */

const checkForUser = (logInInfo: IUserLogin) => {
  const { email, password } = logInInfo;
  const users: IUser[] | [] = getUsers();

  if (!users.length) return false;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return false;
  }
  setItem("auth-token", user.userId.toString());
  return user;
};

const logOut = () => {
  removeItem("auth-token");
};

const getUsers = () => {
  const users = getItem("users");
  if (!users) return [];
  return JSON.parse(users);
};

const signUp = (userInfo: IUser) => {
  const users = getUsers();
  const newUser = userInfo;
  newUser.userId = users.length + 1;
  users.push(newUser);
  setItem("users", users);
};

const getAuth = () => {
  const auth = window.localStorage.getItem("auth-token");
  if (!auth) return "";
  return JSON.parse(auth);
};

const getUser = () => {
  const auth = getAuth();
  if (auth.length) {
    const users = getUsers();
    const user = users.find(
      (user: { userId: number }) => user.userId.toString() === getAuth()
    );
    return user;
  }
  return null;
};

export { checkForUser, getUsers, signUp, logOut, getUser, getAuth };
