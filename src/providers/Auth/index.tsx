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
  verifyRecaptcha: () => void;
  closeCaptcha: () => void;
  isVerified: boolean;
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

  const [isVerified, setIsVerified] = useState(false)

  const verifyRecaptcha = () => {
    setIsVerified(true)
  }

  const closeCaptcha = () => {
    setIsVerified(false)
  }

  const signIn = (data: UserData) => {
    isVerified ?
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
        closeCaptcha()
      })
      .catch((error) => toast.error("E-mail ou senha incorretos!")) : toast.error("Verifique que você não é um robô!");
  };

  const Logout = () => {
    localStorage.clear();
    setToken("");
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, signIn, Logout, verifyRecaptcha, isVerified, closeCaptcha }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
