import { Router } from "express";
  import UserController from "../controllers/UserController";
  import { checkJwt } from "../middlewares/checkJwt";
  import { checkRole } from "../middlewares/checkRole";

  const router = Router();

  router.get("/", [checkJwt, checkRole(["PARTNER"])], UserController.listAll);

  router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["OFFICER", "PARTNER", "ASSIGNEE"])],
    UserController.getOneById
  );

  router.post("/", [checkJwt, checkRole(["OFFICER", "PARTNER", "ASSIGNEE"])], UserController.newUser);

  router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["OFFICER", "PARTNER", "ASSIGNEE"])],
    UserController.editUser
  );

  router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["OFFICER", "PARTNER", "ASSIGNEE"])],
    UserController.deleteUser
  );

  export default router;