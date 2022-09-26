import { IContact } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const ContactCreateService = async (
  user_id: any,
  { name, email, phone }: IContact
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();
  const contactsUserExists = contacts.find(
    (contact) => contact.user === user_id && contact.phone === phone
  );
  if (contactsUserExists) {
    throw new AppError(409, "Contact already exists");
  }

  const contact = new Contact();
  contact.nome = name;
  contact.email = email;
  contact.phone = phone;
  contact.user = user_id;

  contactRepository.create(contact);
  await contactRepository.save(contact);

  return contact;
};

export default ContactCreateService