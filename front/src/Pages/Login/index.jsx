import { Container, Button } from "./style";
import Input from "../../Components/Input";
import { toast } from "react-toastify";

import { api } from "../../Services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

const Login = (authenticated, setAuthenthicated) => {
  

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = async (data) => {
    const response = await api.post("/sessions/", data).catch((err) => {
      toast.error("Email ou senha inválidos");
    });

    const { user, token } = response.data;

    localStorage.setItem("@KenzieHub:token", token);
    localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
    history.push(`/dashboard/${user.id}`);
  };

  if (localStorage.getItem("@KenzieHub:token")) {
    return <Redirect to={`/dashboard/:user_id`} />;
  }
  return (
    <Container>
      
    </Container>
  );
};
/*  */
export default Login;
