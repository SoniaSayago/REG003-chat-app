import auth from "./auth";
import express from "express";
import { Request, Response, NextFunction } from 'express';
import {name, version} from "../config"

const root = (app: express.Application, next: any) => {
  app.get('/', (req:Request, res:Response) => res.json({ name: name, version: version }));
  app.all('*', (req:Request, res:Response, nextAll) => nextAll(404));
  return next();
};

const register = (app: express.Application, routes: any, cb: any) => {
  if (!routes.length) {
    return cb();
  }

  routes[0](app, (err: string) => {
    if (err) {
      return cb(err);
    }
    return register(app, routes.slice(1), cb);
  });
};

export default (app: express.Application, next: any) => register(app, [
  auth,
  root,
], next);
