import { ReactNode } from "react";
import { UserProvider } from "./User";
import { PeopleProvider } from "./People";
import { AuthProvider } from "./Auth";

interface ContextProps {
  children: ReactNode;
}

const Providers = ({ children }: ContextProps) => {
  return (
    <UserProvider>
      <AuthProvider>
        <PeopleProvider>{children}</PeopleProvider>
      </AuthProvider>
    </UserProvider>
  );
};

export default Providers;
