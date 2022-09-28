import { Container } from "./style";
import { UserContext } from "../../Providers/Users";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../Providers/Contacts";

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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";

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

const Users = () => {
  const { users, listAllUsers } = useContext(UserContext);
  const token = localStorage.getItem("tokenFullstack");

  const [idUser, setIdUser] = useState();

  const [modalCreate, setModalCreate] = useState(false);
  const setModalCreateOpen = () => setModalCreate(true);
  const setModalCreateClose = () => setModalCreate(false);

  const [modalPatch, setModalPatch] = useState(false);
  const setModalPatchOpen = () => setModalPatch(true);
  const setModalPatchClose = () => setModalPatch(false);

  const [modalDelete, setModalDelete] = useState(false);
  const setModalDeleteOpen = () => setModalDelete(true);
  const setModalDeleteClose = () => setModalDelete(false);

  const [typeToCreate, setTypeToCreate] = useState("user");

  const createFunction = () => {
    setTypeToCreate("user");
    setModalCreate(true);
  };

  const createContactFunction = (id) => {
    setTypeToCreate("contact");
    setModalCreate(true);
    setIdUser(id);
  };

  const attFunction = (id) => {
    setIdUser(id);
    setModalPatch(true);
  };

  const deleteFunction = (id) => {
    setIdUser(id);
    setModalDelete(true);
  };

  useEffect(() => {
    listAllUsers(token);
  }, [modalDelete, modalPatch, modalCreate]);

  return (
    <Container>
      <div className="header">
        Lista de Usuários
        <Button className="botaoModal" onClick={() => createFunction()}>
          Cadastrar novo Usuário
        </Button>
      </div>
      <TableContainer component={Paper} sx={{ width: "80vw" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Telefone</StyledTableCell>
              <StyledTableCell>Data de cadastro</StyledTableCell>
              <StyledTableCell>Atualizar</StyledTableCell>
              <StyledTableCell>Deletar</StyledTableCell>
              <StyledTableCell>Adicionar contato</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>
                  {String(user.create_at).split("T")[0]}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "var(--button-background)" }}
                    onClick={() => attFunction(user.id)}
                  >
                    <GrUpdate />
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "var(--button-background)" }}
                    onClick={() => deleteFunction(user.id)}
                  >
                    <AiFillDelete />
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "#89C541" }}
                    onClick={() => createContactFunction(user.id)}
                  >
                    <IoIosAddCircle />
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
          typeUser={"user"}
          setModalOpen={modalDelete}
          setModalClose={setModalDeleteClose}
        />
      )}
      {modalPatch === true && (
        <ModalPatch
          idUser={idUser}
          typeUser={"user"}
          setModalOpen={modalPatch}
          setModalClose={setModalPatchClose}
        />
      )}
      {modalCreate === true && (
        <ModalCreate
          idUser={idUser}
          typeUser={typeToCreate}
          setModalOpen={modalCreate}
          setModalClose={setModalCreateClose}
        />
      )}
    </Container>
  );
};

export default Users;
