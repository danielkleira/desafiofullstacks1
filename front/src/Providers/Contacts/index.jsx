import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const createContact = (token, data, id) => {
    api
      .post(`contacts/${id}`, data, {
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

  const listAllContact = (token, id) => {
    api
      .get(`contacts/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listByIdContact = (token, idUser, idContact) => {
    api
      .get(`contacts/${idUser}/${idContact}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const UpdateContact = (token, data, idUser, idContact) => {
    api
      .patch(`contacts/${idUser}/${idContact}`, data, {
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

  const deleteContact = (token, idUser, idContact) => {
    api
      .delete(`contacts/${idUser}/${idContact}`, {
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
    <ContactContext.Provider
      value={{
        contacts,
        createContact,
        listAllContact,
        listByIdContact,
        UpdateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const Contacts = () => useContext(ContactContext);
