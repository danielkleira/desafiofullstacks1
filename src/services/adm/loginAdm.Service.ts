import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IAdmLogin } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Adm } from "../../entities/adm.entity";
import { AppError } from "../../errors/appError";

const AdmLoginService = async ({ email, password }: IAdmLogin) => {
  const admRepository = AppDataSource.getRepository(Adm);
  const findAdm = await admRepository.findOneBy({ email: email });

  if (!findAdm) {
    throw new AppError(401, "Email or password is incorrect");
  }

  const comparePassword = bcrypt.compareSync(password, findAdm.password);

  if (!comparePassword) {
    throw new AppError(401, "Password or Email is incorrect");
  }

  const token = jwt.sign(
    { id: findAdm.id, email: findAdm.email },
    "ZYZZZ#@)(HTn/",
    { expiresIn: "48h" }
  );

  return token;
};

export default AdmLoginService;
