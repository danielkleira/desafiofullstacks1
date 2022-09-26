import { Request, Response } from "express";
import UserDeleteService from "../../services/users/deleteUser.Service";

async function UserDeleteController(req: Request, res: Response) {
  const user_id = req.params.id;
  const deleted = await UserDeleteService(user_id);
  return res.status(200).json({ message: "Deleted user successfully" });
}

export default UserDeleteController;
