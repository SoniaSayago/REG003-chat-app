import { Request, Response, NextFunction } from 'express';

const httpErrors:Record<number, string> = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  500: 'Internal server error',
};

export default (err: any, req:Request, resp:Response, next: NextFunction) => {
  const statusCode = err?.statusCode || 500;
  const message = err?.message || httpErrors[statusCode] || err;
  if (statusCode === 500) {
    console.error(statusCode, message);
  }
  resp.status(statusCode).json({ statusCode, message });
  next();
};