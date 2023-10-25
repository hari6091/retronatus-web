export interface IUser {
  email?: string;
  username?: string;
  token?: { token: string };
}

export interface IContext extends IUser {
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
  logout: () => void;
  getUsers: () => Promise<any>;
}

export interface IAuthProvider {
  children: JSX.Element;
}
