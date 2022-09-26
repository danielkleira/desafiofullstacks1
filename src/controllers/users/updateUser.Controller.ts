import { Request, Response } from "express";
import UpdateUserService from "../../services/users/updateUser.Service";

async function UserUpdateController(req: Request, res: Response) {
  const id = req.params.id;
  const updatedUser = await UpdateUserService(id, req.body);
  return res.status(200).json(updatedUser);
}

export default UserUpdateController;
