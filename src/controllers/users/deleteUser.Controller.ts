import { Request, Response } from "express";
import UserDeleteService from "../../services/users/deleteUser.Service";
import { AppError, handleError } from "../../errors/appError";
async function UserDeleteController(req: Request, res: Response) {
  const user_id = req.params.id;
  try {
    const deleted = await UserDeleteService(user_id);
    return res.status(200).json({ message: "Deleted user successfully" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default UserDeleteController;
