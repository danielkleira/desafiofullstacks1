import { Request, Response } from "express";
import AdmLoginService from "../../services/adm/loginAdm.Service";
import { AppError, handleError } from "../../errors/appError";

async function AdmLoginController(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const token = await AdmLoginService({ email, password });
    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default AdmLoginController;
