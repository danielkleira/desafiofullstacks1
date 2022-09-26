import { Request, Response } from "express";
import UserCreateService from "../../services/users/createUser.Service";

async function UserCreateController(req: Request, res: Response) {
  const { name, email, phone } = req.body;
  const newUser = await UserCreateService({
    name,
    email,
    phone,
  });
  return res.status(200).json(newUser);
}

export default UserCreateController;
