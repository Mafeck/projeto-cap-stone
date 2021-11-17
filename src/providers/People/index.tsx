import jwtDecode from "jwt-decode";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { useAuth } from "../Auth";
import api from "../../services/api";
import { useUser } from "../User";

interface Address {
  road: string;
  zipCode: string;
  district: string;
  houseNumber: string;
}

interface Comments {
  title: string;
  comment: string;
  id: number;
}

interface People {
  name: string;
  cpf: string;
  genre: string;
  naturalness: string;
  nationality: string;
  fatherName: string;
  motherName: string;
  qualification: string;
  company: string;
  phone: string;
  type: string;
  maritalStatus: string;
  address: Address[];
  comments: Comments[];
  id: number;
  userId: string;
}

interface PeopleContextData {
  people: People[];
  setPeople: (props: People[]) => void;
  client: People;
  setClient: (props: People) => void;
}

interface PeopleProviderProps {
  children: ReactNode;
}

interface DecodeProps {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

const PeopleContext = createContext<PeopleContextData>({} as PeopleContextData);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [people, setPeople] = useState<People[]>([]);
  const [client, setClient] = useState<People>({} as People);
  const [token] = useState(localStorage.getItem("@token:haki") || "");
  const { user } = useUser();

  useEffect(() => {
    api
      .get(`/users/${Object.values(user)[5]}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPeople(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PeopleContext.Provider value={{ people, setPeople, client, setClient }}>
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);
