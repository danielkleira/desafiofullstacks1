import { IContactId, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const ContactListByIdService = async (id: string, user_id: any) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  const account = contacts.find((contact) => contact.id === id);

  if (!account) {
    throw new AppError(404, "Contact not found");
  }

  if (account.user.id != user_id) {
    throw new AppError(404, "Not has permission");
  }
  return account;
};

export default ContactListByIdService;
