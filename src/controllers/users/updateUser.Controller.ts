import { Request, Response } from "express";
import UpdateUserService from "../../services/users/updateUser.Service";
import { AppError, handleError } from "../../errors/appError";
async function UserUpdateController(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const updatedUser = await UpdateUserService(id, req.body);
    return res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}
export default UserUpdateController;
