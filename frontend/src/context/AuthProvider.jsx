import React, { createContext, useContext, useState } from "react";

export const AuthConext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthConext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthConext.Provider>
  );
}
export const useAuth = () => useContext(AuthConext);
