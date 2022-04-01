import { Router } from "express";
import { delelteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/tasks";

import {authJwt} from '../middlewares'

const router = Router()


//router.get('/tasks', getTasks)
router.get('/tasks', getTasks)

//router.get('/tasks/count', authJwt.verifyToken, getTaskCount)

router.post('/tasks/:id', authJwt.verifyToken, getTask)

router.post('/tasks', [authJwt.verifyToken, authJwt.isAdmin], saveTask)

router.put('/tasks/:id', [authJwt.verifyToken, authJwt.isAdmin], updateTask)

router.delete('/tasks/:id', [authJwt.verifyToken, authJwt.isAdmin], delelteTask)

//router.post('/users/:id', getTask)

export default router

