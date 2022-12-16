import express from "express";
import { getUsers, Register, Login } from "../controllers/Users.js";

const router = express.Router();

router.get("/Users", getUsers);
router.post("/Users", Register);
router.post("/login", Login);

export default router;
