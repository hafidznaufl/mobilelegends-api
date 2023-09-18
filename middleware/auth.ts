import { Request, Response, NextFunction } from "express";
import jwt, { Secret, VerifyErrors } from "jsonwebtoken";

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const SECRET_KEY: Secret | undefined = process.env.SECRET_KEY;

  if (!token) {
    return res.sendStatus(401)
  }

  if (!SECRET_KEY) {
    return res.sendStatus(500);
  }

  jwt.verify(token, SECRET_KEY, (err: VerifyErrors | null, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user;
    next();
  });
}

function handleInvalidEndpoint(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = new Error("Invalid Endpoint");
  res.status(404).json({ error: error.message });
}

export { handleInvalidEndpoint, authenticateToken };
