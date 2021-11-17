import jwtDecode from "jwt-decode";
import { useState, useContext, ReactNode, createContext } from "react";
import { string } from "yup";
import { number } from "yup/lib/locale";
import api from "../../services/api";
import { useAuth } from "../Auth";

interface User {
  email: string;
  id: number;
  oab: string;
  phone: string;
  state: string;
  username: string;
}

interface UserContextData {
  user: User;
  setUser: (props: User) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

interface DecodeToken {
  sub: string;
  exp: number;
  iat: number;
  email: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@user:haki")!) || {}
  );
  const token = JSON.parse(localStorage.getItem("@token:haki")!);

  const getUser = () => {
    const tokenDecode = jwtDecode<DecodeToken>(token!);

    api
      .get(`users/${tokenDecode.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  if (token) {
    getUser();
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
