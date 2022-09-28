import { Request, Response } from "express";
import ContactListByIdService from "../../services/contacts/listContactById.Service";
import { AppError, handleError } from "../../errors/appError";
async function ContactListByIdController(req: Request, res: Response) {
  const contact_id = req.params.contact_id;
  const user_id = req.params.id;
  try {
    const contact = await ContactListByIdService(contact_id, user_id);
    return res.status(200).json(contact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default ContactListByIdController;
