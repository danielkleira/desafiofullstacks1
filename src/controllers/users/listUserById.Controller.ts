import { Request, Response } from "express";
import UserListByIdService from "../../services/users/listUserById.Service";

async function UserListByIdController(req: Request, res: Response) {
  const user_id = req.params.id;
  const listed = await UserListByIdService(user_id);
  return res.status(200).json(listed);
}

export default UserListByIdController;
