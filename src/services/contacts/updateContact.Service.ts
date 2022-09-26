import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const ContactUpdateService = async (
  id: string,
  contactDataUpdate: any,
  user_id: any
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  let contact = await contactRepository.findOneBy({ id: id });
  if (contact) {
    if (contact.user.id != user_id) {
      throw new AppError(404, "Not has permission");
    }
  }

  if (!contact) {
    throw new AppError(404, "Contact not found");
  }

  let array = Object.keys(contactDataUpdate);
  const modifyName = array.includes("name");
  const modifyEmail = array.includes("email");
  const modifyPhone = array.includes("phone");

  await contactRepository.update(id, { ...contactDataUpdate });

  return contactDataUpdate;
};

export default ContactUpdateService;
