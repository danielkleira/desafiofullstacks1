import { createContext, useState, useEffect } from "react";

export const BodyContext = createContext([]);

export const BodyProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [tab, setTab] = useState("usuarios");
  
  const chooseAuth = () => {
    setAuthenticated(!authenticated);
  };
  const chooseTab = (data) => {
    setTab(data);
  };


  useEffect(() => {
    if (tab === "sair") {
      setAuthenticated(false);
    }
  }, [tab]);

  return (
    <BodyContext.Provider
      value={{ authenticated, setAuthenticated, chooseAuth, chooseTab, tab }}
    >
      {children}
    </BodyContext.Provider>
  );
};
