import React, { useState, FC } from "react";
import { IUser, IUserLogin } from "interfaces/user";
import { checkForUser, logOut, getUser, getAuth } from "services/util/userHelper";

interface IAuthContext {
  userToken: string;
  userInfo: IUser | null;
  userLogIn?: (logInInfo: IUserLogin) => void;
  userLogOut?: () => void;
}

const defaultState = {
  userToken: getAuth(),
  userInfo: getUser(),
};

export const UserContext = React.createContext<IAuthContext>(defaultState);

// TODO: check if userToken is really necessary in the context, maybe the info is enough

const UserProvider: FC = ({ children }) => {
  const [userToken, setToken] = useState(defaultState.userToken);
  const [userInfo, setUserInfo] = useState<IUser | null>(defaultState.userInfo);

  const userLogIn = (logInInfo: IUserLogin) => {
    const user = checkForUser(logInInfo);
    if (!user) {
      throw new Error("User not found");
    }
    setToken(user.userId.toString());
    setUserInfo(user);
  };

  const userLogOut = () => {
    setToken("");
    setUserInfo(null);
    logOut();
  };
  return (
    <UserContext.Provider
      value={{
        userToken,
        userInfo,
        userLogIn,
        userLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
