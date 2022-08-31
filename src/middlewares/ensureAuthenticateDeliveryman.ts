import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const { secret_token_deliveryman } = auth;

  const [, token] = authHeader.split(" ");
  try {
    const { sub } = verify(token, secret_token_deliveryman) as IPayload;

    request.deliveryman_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!",
    });
  }
}
