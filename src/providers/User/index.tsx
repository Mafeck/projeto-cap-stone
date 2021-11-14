import { useState, useContext, ReactNode, createContext } from "react";

interface User {
  name: string;
  email: string;
  password: string;
  id: number;
}

interface UserContextData {
  user: User[];
  // setUser: (props: User[]) => void;
  token: string;
  setToken: (props: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState([]
    // JSON.parse(localStorage.getItem("@user:haki")!) || []
  );
  const [token, setToken] = useState(""
    // JSON.parse(localStorage.getItem("@token:haki")!) || ""
  );

  return (
    <UserContext.Provider value={{ user, /*setUser,*/ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
