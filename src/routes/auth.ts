import express from "express";
import {authenthicateUser} from "../controller/auth.controller"

export default (app: express.Application, nextMain: () => any) => {
  app.post('/', authenthicateUser)

  return nextMain();
};