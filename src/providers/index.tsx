import { ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

const Providers = ({ children }: ContextProps) => {
  return <>{children}</>;
};

export default Providers;
