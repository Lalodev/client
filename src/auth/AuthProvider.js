import { useHistory } from "react-router-dom";
import { createContext, useState } from "react";
import roles from "../helpers/roles";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);

  const login = (userCredencials, fromLocation) => {
    setUser({
      id: 1,
      name: "Luis",
      email: "luis@correo.com",
      role: roles.regular,
    });
    if (fromLocation) {
      history.push(fromLocation);
    }
  };

  const logout = () => setUser(null);

  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
