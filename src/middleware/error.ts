import { Request, Response, NextFunction } from 'express';

const httpErrors = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  500: 'Internal server error',
};

interface ErrorAtributes { statusCode: number; message: string};


export default (err: ErrorAtributes, req:Request, resp:Response, next: NextFunction) => {
  const statusCode = err.statusCode;
  const message = err.message;
  if (statusCode === 500) {
    console.error(statusCode, message);
  }
  resp.status(statusCode).json({ statusCode, message });
  next();
};