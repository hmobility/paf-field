import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);

routes.use('/api', (req, res)=> res.json(
    {username:'김상수'}
));

export default routes;