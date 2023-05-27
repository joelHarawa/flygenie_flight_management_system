import express from "express";
import {register, staffRegister} from "../controllers/auth.js";
import {login} from "../controllers/auth.js";
import {staffLogin} from "../controllers/auth.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/stafflogin", staffLogin);
router.post("/staffregister", staffRegister);

export default router;