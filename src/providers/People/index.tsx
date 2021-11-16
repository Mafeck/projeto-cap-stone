import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

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

interface TokenDecodeParams {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

const PeopleContext = createContext<PeopleContextData>({} as PeopleContextData);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const token = JSON.parse(localStorage.getItem("@token:haki")!);
  const [tokenDecode] = useState<TokenDecodeParams>(jwtDecode(token!));
  const [people, setPeople] = useState<People[]>([]);
  const [client, setClient] = useState<People>(
    JSON.parse(localStorage.getItem("@client:haki")!)
  );

  useEffect(() => {
    api
      .get(`users/${tokenDecode.sub}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPeople(response.data));
  }, []);

  return (
    <PeopleContext.Provider value={{ people, setPeople, client, setClient }}>
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);
