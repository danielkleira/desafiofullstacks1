import { IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const UserUpdateService = async (id: string, userDataUpdate:any) => {
  const userRepository = AppDataSource.getRepository(User);
  let user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError(401, "User not found");
  }

  let array = Object.keys(userDataUpdate)
  const modifyName= array.includes("name")
  const modifyEmail =array.includes("email")
  const modifyPhone =array.includes("phone")

  await userRepository.update(id, {...userDataUpdate})

  return userDataUpdate
};

export default UserUpdateService;
