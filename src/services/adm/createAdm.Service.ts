import { hash } from "bcrypt";

import { v4 as uuidv4 } from "uuid";
import { IAdm } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Adm } from "../../entities/adm.entity";
import { AppError } from "../../errors/appError";

const AdmCreateService = async ({ name, email, password }: IAdm) => {
  const admRepository = AppDataSource.getRepository(Adm);
  const findAdm = await admRepository.find();
  const admAlreadyExists = findAdm.find((adm) => adm.email === email);

  if (admAlreadyExists) {
    throw new AppError(409, "Adm email already exists");
  }

  const hashedPassword = await hash(password, 12);

  const adm = new Adm();
  adm.name = name;
  adm.email = email;
  adm.password = hashedPassword;

  admRepository.create(adm);
  await admRepository.save(adm);

  return adm;
};

export default AdmCreateService;
