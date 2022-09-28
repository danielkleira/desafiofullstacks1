import { createContext, useState, useEffect } from "react";

export const BodyContext = createContext([]);

export const BodyProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState("usuarios");
  
  const chooseAuth = () => {
    setAuthenticated(!authenticated);
  };
  const chooseTab = (data) => {
    setTab(data);
  };




  return (
    <BodyContext.Provider
      value={{ authenticated, setAuthenticated, chooseAuth, chooseTab, tab }}
    >
      {children}
    </BodyContext.Provider>
  );
};
