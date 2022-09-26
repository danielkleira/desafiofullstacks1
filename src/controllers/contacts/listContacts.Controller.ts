import { Request, Response } from "express";
import ContactListService from "../../services/contacts/listContacts.Service";

async function ContactListController(req: Request, res: Response) {
  const contacts = await ContactListService();
  return res.status(200).json(contacts);
}

export default ContactListController;
