import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useEffect } from "react";
import { BodyContext } from "../Body";
import { useNavigate } from "react-router-dom";

export const AdmContext = createContext({});

export const AdmProvider = ({ children }) => {
  const navigate = useNavigate();

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

  const login = (data) => {
    api
      .post(`login`, data)
      .then((response) => {
        toast.success("Login realizado com sucesso");
        localStorage.setItem("tokenFullstack", response.data.token);
        navigate("/dashboard")
      })
      .catch((err) => {
        toast.error("Algo deu errado aqui");
      });
  };

  return (
    <AdmContext.Provider
      value={{
        criarAdm,
        login,
      }}
    >
      {children}
    </AdmContext.Provider>
  );
};
