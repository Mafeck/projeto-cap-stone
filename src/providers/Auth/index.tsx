import { createContext, useState, ReactNode, useContext } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useUser } from "../User";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  token: string;
  signIn: (data: UserData) => void;
  Logout: () => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();
  const { setUser } = useUser();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token:haki")!) || ""
  );

  const signIn = (data: UserData) => {
    api
      .post("/signin", data)
      .then((response) => {
        localStorage.clear();
        setToken(response.data.accessToken);
        setUser(response.data.user);
        localStorage.setItem(
          "@token:haki",
          JSON.stringify(response.data.accessToken)
        );
        toast.success("Login efetuado com sucesso!");
        setTimeout(() => history.push("/dashboard"), 700);
      })
      .catch((error) => toast.error("E-mail ou senha incorretos!"));
  };

  const Logout = () => {
    localStorage.clear();
    setToken("");
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, signIn, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
