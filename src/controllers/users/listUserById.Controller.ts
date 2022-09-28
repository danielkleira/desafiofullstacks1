import { Request, Response } from "express";
import UserListByIdService from "../../services/users/listUserById.Service";
import { AppError, handleError } from "../../errors/appError";
async function UserListByIdController(req: Request, res: Response) {
  const user_id = req.params.id;
  try {
    const listed = await UserListByIdService(user_id);
    return res.status(200).json(listed);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default UserListByIdController;
