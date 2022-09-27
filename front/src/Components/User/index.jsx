
import { Container } from "./style"
import { UserContext } from "../../Providers/Users"
import { AdmContext } from "../../Providers/Adms"
import { useContext, useEffect, useState } from "react"

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
    const { users, listAllUsers}= useContext(UserContext)
    const {token}= useContext(AdmContext)

    useEffect(() => {
        listAllUsers(token)
    },[])


    const [anchorEl, setAnchorEl] =useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setAnchorEl(null);
  };



    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [att, setAtt] = useState(false);
  const attOpen = () => setAtt(true);
  const attClose = () => setAtt(false);

  const [deleteProd, setDeleteProd] = useState(false);
  const handleOpenDelete = () => setDeleteProd(true);
  const handleCloseDelete = () => setDeleteProd(false);




    return(
        <Container>
            <div className="header">
          Lista de produtos
          <Button className="botaoModal" onClick={handleOpen}>
            Cadastrar novo Usuário
          </Button>
        </div>
        <div className="userSelect">
          <Button
            id="fade-button"
            aria-controls={openMenu ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              color: "var(--text-color)",
              backgroundColor: "var(--header-background)",
            }}
          >
            Usuários
          </Button>
          {users.length > 0 ? (
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              TransitionComponent={Fade}
            >
              {users.map((user) => (
                <MenuItem
                  id={user.id}
                  onClick={handleCloseMenu}
                  key={user.id}
                >
                  {user.nome}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleCloseMenu}>
                Sem usuários cadastrados
              </MenuItem>
            </Menu>
          )}
        </div>
       
       
       
        </Container>
    )
}

export default Users