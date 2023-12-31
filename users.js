import express from "express";
import {createUser, getUsers, getUser, deleteUser, updateUser} from "../controllers/usersc.js";

const router = express.Router();

router.get("/users",getUsers);
router.post("/user",createUser);
router.get("/user/:id",getUser);
router.delete("/user/:id",deleteUser)
router.put("/user/:id",updateUser);


export default router