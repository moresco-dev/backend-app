import { Router } from "express";
import { getUsers , getUserById  } from "../controllers/users";
import {createUser, login} from '../controllers/auth'


const router = Router()

router.get('/usrs', getUsers)
router.post('/usrs/add', createUser)

router.post('/usrs/login',login)
router.post('/usrs/:id', getUserById)
//router.post('/login',login)

export default router

