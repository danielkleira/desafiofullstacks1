import { IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const ContactListService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = contactRepository.find();
  return contacts;
};

export default ContactListService;
