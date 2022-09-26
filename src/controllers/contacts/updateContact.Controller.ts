import { Request, Response } from "express";
import ContactCreateService from "../../services/contacts/createContact.Service";

async function ContactUpdateController(req: Request, res: Response) {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const newContact = await ContactCreateService(id, {
    name,
    email,
    phone,
  });
  return res.status(200).json(newContact);
}

export default ContactUpdateController;
