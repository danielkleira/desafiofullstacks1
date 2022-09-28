import { Request, Response } from "express";
import UserCreateService from "../../services/users/createUser.Service";
import { AppError, handleError } from "../../errors/appError";
async function UserCreateController(req: Request, res: Response) {
  const { name, email, phone } = req.body;

  try {
    const newUser = await UserCreateService({
      name,
      email,
      phone,
    });
    return res.status(200).json(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default UserCreateController;
