"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Porps {
  children: ReactNode;
}
const AuthProvider = ({ children }: Porps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
