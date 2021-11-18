import { useState, useContext, createContext, ReactNode } from "react";

interface Address {
  road?: string;
  zipCode?: string;
  district?: string;
  houseNumber?: string;
}

interface Comments {
  title: string;
  comment: string;
  id: number;
  data: string;
}

interface Process {
  processNumber?: string;
  area?: string;
}

interface ClientData {
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
  comments?: Comments[];
  id: number;
  userId: string;
  process?: Process;
}

interface ClientProvidersData {
  children: ReactNode;
}

interface ClientContextProps {
  client: ClientData;
  setClient: (props: ClientData) => void;
  comments: Comments[];
  setComments: (props: Comments[]) => void;
}

const ClientContext = createContext<ClientContextProps>(
  {} as ClientContextProps
);

export const ClientProvider = ({ children }: ClientProvidersData) => {
  const [client, setClient] = useState<ClientData>({} as ClientData);
  const [comments, setComments] = useState<Comments[]>([]);

  return (
    <ClientContext.Provider
      value={{ client, setClient, comments, setComments }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
