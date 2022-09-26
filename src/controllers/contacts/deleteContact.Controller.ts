import { Request, Response } from "express";
import ContactDeleteService from "../../services/contacts/deleteContact.Service";
async function ContactDeleteController(req: Request, res: Response) {
  const contact_id = req.params.contact_id;
  const user_id = req.params.id;
  const newContact = await ContactDeleteService(contact_id, user_id);
  return res.status(200).json(newContact);
}

export default ContactDeleteController;
