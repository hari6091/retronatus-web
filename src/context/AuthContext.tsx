import React, { createContext, useEffect, useMemo, useState } from "react";

import api from "../services/api";

import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const users = getUserLocalStorage();

    if (users) {
      setUser(users);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const req = await api.post("/Usuario/login", { email, password });

      const payload = { token: req.data };

      setUser(payload);
      setUserLocalStorage(payload);
    } catch {
      throw new Error();
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      await api.post("/Usuario", { name, email, password });
    } catch {
      throw new Error();
    }
  };

  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  const auth = useMemo(() => ({ ...user, signIn, logout, signUp }), [user]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
