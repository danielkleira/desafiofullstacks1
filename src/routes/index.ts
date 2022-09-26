import { Express } from "express";
import { Router } from "express";

import AdmCreateController from "../controllers/adm/createAdm.Controller";
import AdmLoginController from "../controllers/adm/loginAdm.Contoller";
import ContactCreateController from "../controllers/contacts/createContact.Controller";

import UserCreateController from "../controllers/users/createUser.Controller";
import UserDeleteController from "../controllers/users/deleteUser.Controller";
import UserListController from "../controllers/users/listUser.Controller";
import UserListByIdController from "../controllers/users/listUserById.Controller";
import UserUpdateController from "../controllers/users/updateUser.Controller";

import VerifyToken from "../middlewares/authentication/VerifyToken.middleware";

export const routes = Router();

routes.post("/register", AdmCreateController);
routes.post("/login", AdmLoginController);

routes.post("/users", VerifyToken, UserCreateController);
routes.get("/users", VerifyToken, UserListController);
routes.get("/users/:id", VerifyToken, UserListByIdController);
routes.patch("/users/:id", VerifyToken, UserUpdateController);
routes.delete("/users/:id", VerifyToken, UserDeleteController);


routes.post("/users/:id/contacts", VerifyToken,ContactCreateController);
routes.get("/users/:id/contacts", VerifyToken, UserListController);
routes.get("/users/:id", VerifyToken, UserListByIdController);
routes.patch("/users/:id", VerifyToken, UserUpdateController);
routes.delete("/users/:id", VerifyToken, UserDeleteController);
