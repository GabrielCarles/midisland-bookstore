interface IUser {
  user: string;
  userId: number;
  type: string;
  email: string;
  password: string;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserSignUp {
  user: string;
  userId: number;
  type: string;
  email: string;
  password: string;
}

export type { IUser, IUserLogin };
