import { useState, useContext, ReactNode, createContext } from "react";

interface User {
  email: string;
  id: number;
  username: string;
}

interface UserContextData {
  user: User[];
  setUser: (props: User[]) => void;
<<<<<<< HEAD
  token: string;
  setToken: (props: string) => void;
=======
>>>>>>> feature/pageClient
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@user:haki")!) || []
<<<<<<< HEAD
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token:haki")!) || ""
  );

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
=======
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
>>>>>>> feature/pageClient
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
