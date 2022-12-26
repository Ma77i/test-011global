import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // local states
  const [userData, setUserData] = useState({});
  const [userError, setUserError] = useState(null);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userError, setUserError }}
    >
      {children}
    </UserContext.Provider>
  );
};
