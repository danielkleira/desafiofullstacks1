import { useEffect, useState, useContext } from "react";

import { ContactContext } from "../../Providers/Contacts";
import { UserContext } from "../../Providers/Users";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  width: 400,
  color: "var(--text-color)",
  bgcolor: "var(--header-background)",
  border: "none",
  boxShadow: 5,
  p: 6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const ModalPatch = ({
  idContact,
  idUser,
  typeUser,
  setModalOpen,
  setModalClose,
}) => {
  const { updateContact } = useContext(ContactContext);
  const { updateUser } = useContext(UserContext);
  const token = localStorage.getItem("tokenFullstack");

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Email inválido"),
    phone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlePatch = (data) => {
    const infos = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    typeUser === "user"
      ? updateUser(token, idUser, infos)
      : updateContact(token, infos, idUser, idContact);
    setModalClose();
  };

  return (
    <>
      <Modal
        open={setModalOpen}
        onClose={setModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {typeUser === "user" ? (
            <p>Atualizar usuário</p>
          ) : (
            <p>Atualizar contato</p>
          )}

          <form
            onSubmit={handleSubmit(handlePatch)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <input
              label={"Nome"}
              name={"name"}
              {...register("name")}
              placeholder="Nome"
            />
            <p>{errors.name?.message}</p>
            <input
              label={"Email"}
              name={"email"}
              {...register("email")}
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>

            <input
              label={"Telefone"}
              name={"phone"}
              {...register("phone")}
              placeholder="Telefone"
            />
            <p>{errors.phone?.message}</p>
            <button type="submit">Atualizar usuário</button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default ModalPatch;
