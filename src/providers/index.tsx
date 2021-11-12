import { ReactNode } from "react";
import { UserProvider } from "./User";
import { PeopleProvider } from "./People";

interface ContextProps {
  children: ReactNode;
}

const Providers = ({ children }: ContextProps) => {
  return (
    <UserProvider>
      <PeopleProvider>{children}</PeopleProvider>
    </UserProvider>
  );
};

export default Providers;
