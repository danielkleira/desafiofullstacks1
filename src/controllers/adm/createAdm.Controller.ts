import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import AdmCreateService from "../../services/adm/createAdm.Service";

async function AdmCreateController(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const newAdm = await AdmCreateService({
      name,
      email,
      password,
    });
    return res.status(201).json(newAdm);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}

export default AdmCreateController;
