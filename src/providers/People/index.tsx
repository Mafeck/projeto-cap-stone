import { ReactNode, useState, useContext, createContext } from "react";

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

const PeopleContext = createContext<PeopleContextData>({} as PeopleContextData);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [people, setPeople] = useState<People[]>([]);
  const [client, setClient] = useState<People>(
    JSON.parse(localStorage.getItem("@client:haki")!)
  );

  return (
    <PeopleContext.Provider value={{ people, setPeople, client, setClient }}>
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);
