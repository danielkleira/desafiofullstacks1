import { Request, Response } from "express";
import AdmCreateService from "../../services/adm/createAdm.Service";

async function AdmCreateController(req: Request, res: Response) {
  const { name, email, password } = req.body;
  const newAdm = await AdmCreateService({
    name,
    email,
    password,
  });
  return res.status(201).json(newAdm);
}

export default AdmCreateController;
