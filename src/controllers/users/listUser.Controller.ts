import { Request, Response } from "express";
import UserListService from "../../services/users/listUsers.Service";
import { AppError, handleError } from "../../errors/appError";
async function UserListController(req: Request, res: Response) {
  try {
    const list = await UserListService();
    return res.status(200).json(list);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default UserListController;
