import { ReactNode } from "react";
import { UserProvider } from "./User";
import { PeopleProvider } from "./People";
import { AuthProvider } from "./Auth";

interface ContextProps {
  children: ReactNode;
}

const Providers = ({ children }: ContextProps) => {
  return (
    <AuthProvider>
      <UserProvider>
        <PeopleProvider>{children}</PeopleProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
