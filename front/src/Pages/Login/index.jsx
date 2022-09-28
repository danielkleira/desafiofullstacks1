import { Container, Button } from "./style";
import Input from "../../Components/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../../Services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useContext, useEffect, useState } from "react";
import { BodyContext } from "../../Providers/Body";
import { AdmContext } from "../../Providers/Adms";

const Login = () => {
  const {  login } = useContext(AdmContext);

  const navigate = useNavigate();

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


  const onSubmitFunction = async (data) => {
    const {email, password} = data;

    const user={ email, password}
    login(user)
  };

 
  return (
    <Container>
      <header>
        <h2>Desafio Fullstack S1</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Login</h1>
        <input
          label={"Email"}
          name={"email"}
          {...register("email")}
          placeholder="Digite seu email"
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          label={"Password"}
          name={"password"}
          {...register("password")}
          placeholder="Digite uma senha"
        />
        <p>{errors.password?.message}</p>
        <Button type="submit">Login</Button>
        <button className="buttonCad" onClick={() => navigate("/")}>
          Ainda não é cadastrado?
        </button>{" "}
      </form>
    </Container>
  );
};
export default Login;
