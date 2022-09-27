import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useEffect } from "react";

export const UserContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const createUser = (token, data) => {
    api
      .post(`users/`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        toast.success("Usuário cadastrado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listAllUsers = (token) => {
    api
      .get(`users/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listIdUsers = (token, id) => {
    api
      .get(`users/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const updateUser = (token, id, data) => {
    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        toast.success("Usuário atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deleteUser = (token, id) => {
    api
      .delete(`users/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        toast.success("Usuário deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        listAllUsers,
        listIdUsers,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
