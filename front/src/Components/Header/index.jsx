import { Container } from "./style";
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { MdOutlineBusiness } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { BodyContext } from "../../Providers/Body";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { chooseTab, tab } = useContext(BodyContext);

  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const sair = () => {
    localStorage.clear();
    toast.success("Desconectado");
    navigate("/login");
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    chooseTab(event.target.id);

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Container>
        <Stack direction="row" spacing={2}>
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              Menu
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              sx={{ zIndex: 9999 }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper className="paper">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        className="menu"
                      >
                        <MenuItem
                          className="menuItem"
                          id="usuarios"
                          onClick={handleClose}
                        >
                          <MdOutlineBusiness />
                          Usuários
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="contatos"
                          onClick={handleClose}
                        >
                          <BsBox />
                          Contatos
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="sair"
                          onClick={() => sair()}
                        >
                          <AiOutlineLogout /> Sair
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      </Container>
    </>
  );
};
export default Header;
