import { Container } from "./style";
import { ContactContext } from "../../Providers/Contacts";
import { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import ModalDelete from "../ModalDelete";
import ModalPatch from "../ModalPatch";
import ModalCreate from "../ModalCreate";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
  p: 4,
};

const styleEdit = {
  position: "absolute",
  display: "flex",
  flexdirection: "column",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  boxShadow: 24,
  color: "var(--text-color)",
  p: 4,
};

const Contacts = () => {
  const { contacts, listAllContact } = useContext(ContactContext);
  const token = useState(localStorage.getItem("tokenFullstack"));
  const [idUser, setIdUser] = useState();
  const [idContact, setIdContact] = useState();

  const [modalPatch, setModalPatch] = useState(false);
  const setModalPatchOpen = () => setModalPatch(true);
  const setModalPatchClose = () => setModalPatch(false);

  const [modalDelete, setModalDelete] = useState(false);
  const setModalDeleteOpen = () => setModalDelete(true);
  const setModalDeleteClose = () => setModalDelete(false);

  const attFunction = (userId, contactId) => {
    setIdUser(userId);
    setIdContact(contactId);
    setModalPatch(true);
  };

  const deleteFunction = (id, contactId) => {
    setIdUser(id);
    setIdContact(contactId);
    setModalDelete(true);
  };

  useEffect(() => {
    listAllContact(token);
  }, [modalDelete, modalPatch]);

  return (
    <Container>
      <div className="header">Lista de contatos</div>
      <TableContainer component={Paper} sx={{ width: "80vw" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Telefone</StyledTableCell>
              <StyledTableCell>Usuário vinculado</StyledTableCell>
              <StyledTableCell>Atualizar</StyledTableCell>
              <StyledTableCell>Deletar</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <StyledTableRow key={contact.id}>
                <StyledTableCell>{contact.name}</StyledTableCell>
                <StyledTableCell>{contact.email}</StyledTableCell>
                <StyledTableCell>{contact.phone}</StyledTableCell>
                <StyledTableCell>{contact.user.name}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "var(--button-background)" }}
                    onClick={() => attFunction(contact.user.id, contact.id)}
                  >
                    <GrUpdate />
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "var(--button-background)" }}
                    onClick={() => deleteFunction(contact.user.id, contact.id)}
                  >
                    <AiFillDelete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {modalDelete === true && (
        <ModalDelete
          idUser={idUser}
          idContact={idContact}
          typeUser={"contact"}
          setModalOpen={modalDelete}
          setModalClose={setModalDeleteClose}
        />
      )}
      {modalPatch === true && (
        <ModalPatch
          idUser={idUser}
          idContact={idContact}
          typeUser={"contact"}
          setModalOpen={modalPatch}
          setModalClose={setModalPatchClose}
        />
      )}
    </Container>
  );
};

export default Contacts;
