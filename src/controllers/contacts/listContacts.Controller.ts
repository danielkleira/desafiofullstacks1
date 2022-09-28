import { Request, Response } from "express";
import ContactListService from "../../services/contacts/listContacts.Service";
import { AppError, handleError } from "../../errors/appError";
async function ContactListController(req: Request, res: Response) {
  try {
    const contacts = await ContactListService();
    return res.status(200).json(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default ContactListController;
