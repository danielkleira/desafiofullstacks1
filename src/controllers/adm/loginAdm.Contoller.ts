import { Request, Response } from "express";
import AdmLoginService from "../../services/adm/loginAdm.Service";

async function AdmLoginController(req: Request, res: Response) {
  const { email, password } = req.body;

  const token = await AdmLoginService({ email, password });
  return res.status(200).json({ token });
}

export default AdmLoginController;
