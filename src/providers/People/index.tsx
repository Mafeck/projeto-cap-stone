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
  data: string;
}

interface Process {
  numberProcess: string;
  area: string;
}

interface People {
  name: string;
  cpf?: string;
  genre?: string;
  naturalness?: string;
  nationality?: string;
  fatherName?: string;
  motherName?: string;
  qualification?: string;
  company?: string;
  phone?: string;
  type: string;
  maritalStatus?: string;
  address?: Address;
  process: Process;
  comments?: Comments[];
  id: number;
  userId: string;
}

interface PeopleContextData {
  people: People[];
  setPeople: (props: People[]) => void;
}

interface PeopleProviderProps {
  children: ReactNode;
}

const PeopleContext = createContext<PeopleContextData>({} as PeopleContextData);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [people, setPeople] = useState<People[]>([]);

  return (
    <PeopleContext.Provider value={{ people, setPeople }}>
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);
