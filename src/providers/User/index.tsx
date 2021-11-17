import { useState, useContext, ReactNode, createContext } from "react";

interface User {
  email: string;
  id: number;
  oab: string;
  phone: string;
  state: string;
  username: string;
}

interface UserContextData {
  user: User[];
  setUser: (props: User) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@user:haki")!) || {}
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
