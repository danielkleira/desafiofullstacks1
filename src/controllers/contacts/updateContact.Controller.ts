import { Request, Response } from "express";
import ContactUpdateService from "../../services/contacts/updateContact.Service";
import { AppError, handleError } from "../../errors/appError";
async function ContactUpdateController(req: Request, res: Response) {
  const contact_id = req.params.contact_id;
  const user_id = req.params.id;

  const { name, email, phone } = req.body;
  try {
    const newContact = await ContactUpdateService(
      contact_id,
      {
        name,
        email,
        phone,
      },
      user_id
    );
    return res.status(200).json(newContact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default ContactUpdateController;
