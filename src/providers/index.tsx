import { ReactNode } from "react";
import { UserProvider } from "./User";
import { PeopleProvider } from "./People";
import { AuthProvider } from "./Auth";
import { ClientProvider } from "./Client";

interface ContextProps {
  children: ReactNode;
}

const Providers = ({ children }: ContextProps) => {
  return (
    <UserProvider>
      <AuthProvider>
        <PeopleProvider>
          <ClientProvider>{children}</ClientProvider>
        </PeopleProvider>
      </AuthProvider>
    </UserProvider>
  );
};

export default Providers;
