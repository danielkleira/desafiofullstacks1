import { useEffect, useState, useContext } from "react";
import { ContactContext } from "../../Providers/Contacts";
import { UserContext } from "../../Providers/Users";

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
};

const ModalDelete = ({
  idContact,
  idUser,
  typeUser,
  setModalOpen,
  setModalClose,
}) => {
  const { deleteContact } = useContext(ContactContext);
  const { deleteUser } = useContext(UserContext);
  const token = localStorage.getItem("tokenFullstack");

  const handleDelete = () => {
    typeUser === "user"
      ? deleteUser(token, idUser)
      : deleteContact(token, idUser, idContact);
    setModalClose();
  };

  return (
    <Modal
      open={setModalOpen}
      onClose={setModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {typeUser === "user" ? <p>Deletar usuário</p> : <p>Deletar contato</p>}
        <p>
          Tem certeza que deseja excluir o{" "}
          {typeUser === "user" ? "usuário" : "contato"} ?
        </p>
        <Button onClick={() => handleDelete()}>Sim</Button>
        <Button onClick={() => setModalClose()}>Não</Button>
      </Box>
    </Modal>
  );
};
export default ModalDelete;
