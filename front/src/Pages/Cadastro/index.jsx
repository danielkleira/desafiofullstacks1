import { Container, Button } from "./style";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { AdmContext } from "../../Providers/Adms";
import { useContext } from "react";

import { api } from "../../Services/api";

import { useNavigate, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Cadastro = () => {
  const navigate = useNavigate();

  const {token}= useContext(AdmContext)
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Digite a mesma senha")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  

  const onSubmitFunction = (data) => {
    console.log("oi");
    const { name, email, password } = data;
    const user = {
      name,
      email,
      password,
    };

      api
        .post(`register/`, user, {
        })
        .then((response) => {
          toast.success("Usuário cadastrado");
        })
        .catch((err) => {
          toast.error("Algo deu errado");
        });
  };

  return (
    <Container>
      <header>
        <h2>Desafio Fullstack S1</h2>
        <button onClick={() => navigate("/login")}>Login</button>{" "}
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Cadastro</h1>

        <input
          label={"Name"}
          name={"name"}
          {...register("name")}
          placeholder="Digite seu nome"
        />
        <p>{errors.name?.message}</p>

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

        <input
          type="password"
          label={"ConfirmPassword"}
          name={"confirmPassword"}
          {...register("confirmPassword")}
          placeholder="Confirme sua senha"
        />
        <p>{errors.confirmPassword?.message}</p>

        <Button type="submit">Cadastre-se</Button>
      </form>
    </Container>
  );
};

export default Cadastro;
