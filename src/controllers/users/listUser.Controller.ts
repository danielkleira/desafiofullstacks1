import { Request, Response } from "express";
import UserListService from "../../services/users/listUsers.Service";

async function UserListController(req: Request, res: Response) {
  const list = await UserListService();
  return res.status(200).json(list);
}

export default UserListController;
