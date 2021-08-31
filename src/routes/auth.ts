import express from "express";
import {authenthicateUser} from "../controller/auth.controller"

export default (app: express.Application, nextMain) => {
  app.post('/', authenthicateUser)

  return nextMain();
};