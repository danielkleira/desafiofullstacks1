import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useEffect } from "react";

export const AdmContext = createContext({});

export const AdmProvider = ({ children }) => {
  const [token, setToken] = useState([]);

  const criarAdm = (data) => {
    api
      .post(`register`, data)
      .then((response) => {
        toast.success("Cadastrado realizado com sucesso");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const login = ( data) => {
    api
      .post(`login`, data)
      .then((response) => {
        toast.success("Login realizado com sucesso")
        setToken(response.data);
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };



  return (
    <AdmContext.Provider
      value={{
        token,
        criarAdm,
        login
      }}
    >
      {children}
    </AdmContext.Provider>
  );
};
