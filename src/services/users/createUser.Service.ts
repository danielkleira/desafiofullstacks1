import { IUser } from "../../interfaces/user";
import {AppDataSource} from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

async function UserCreateService ({ name, email, phone }: IUser) {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "Email already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.phone = phone;
  user.create_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default UserCreateService
