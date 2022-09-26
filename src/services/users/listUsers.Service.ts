import { IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const UserListService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();
  return users;
};

export default UserListService;
