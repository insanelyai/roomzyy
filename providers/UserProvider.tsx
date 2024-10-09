"use client";
import { IUser } from "@/types";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the User interface based on the IUser schema
interface IUserContext {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

// Create the UserContext with a default value of undefined
const UserContext = createContext<IUserContext | undefined>(undefined);

// Define the UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
