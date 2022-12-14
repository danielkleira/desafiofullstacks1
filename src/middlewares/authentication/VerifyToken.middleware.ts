import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

async function VerifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No has token",
    });
  }

  const tokenSplit = token.split(" ");

  jwt.verify(tokenSplit[1], "ZYZZZ#@)(HTn/", (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "invalid token",
      });
    }
    next();
  });
}

export default VerifyToken;
