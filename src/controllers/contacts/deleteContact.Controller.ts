import { Request, Response } from "express";
import ContactDeleteService from "../../services/contacts/deleteContact.Service";
import { AppError, handleError } from "../../errors/appError";
async function ContactDeleteController(req: Request, res: Response) {
  const contact_id = req.params.contact_id;
  const user_id = req.params.id;
  try {
    const newContact = await ContactDeleteService(contact_id, user_id);
    return res.status(200).json(newContact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default ContactDeleteController;
