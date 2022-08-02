import { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [activePlayer, setActivePlayer] = useState(0);

  return (
    <GlobalContext.Provider value={{ activePlayer, setActivePlayer }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
