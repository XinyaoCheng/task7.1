// users.context.js
import { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
