import { Request, Response } from "express";
import ContactUpdateService from "../../services/contacts/updateContact.Service";

async function ContactUpdateController(req: Request, res: Response) {
  const contact_id = req.params.contact_id;
  const user_id = req.params.id;
  console.log('aquiiiiiiiiiiiiiiiii'+user_id)
  const { name, email, phone } = req.body;
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
}

export default ContactUpdateController;
