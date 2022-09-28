import { Request, Response } from "express";
import ContactCreateService from "../../services/contacts/createContact.Service";
import { AppError, handleError } from "../../errors/appError";
async function ContactCreateController(req: Request, res: Response) {
  const id = req.params.id;
  const { name, email, phone } = req.body;

  try {
    const newContact = await ContactCreateService(id, {
      name,
      email,
      phone,
    });
    return res.status(200).json(newContact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default ContactCreateController;
