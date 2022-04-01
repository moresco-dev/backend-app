"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 */

router.get('/tasks', _tasks.getTasks);
/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get tasks count.
 *      tags: [Tasks]
 */

router.get('/tasks/count', _tasks.getTaskCount);
/**
 * @swagger
 * /tasks/count:
 *  post:
 *      summary: Get an specific task.
 *      tags: [Tasks]
 */

router.post('/tasks/:id', _tasks.getTask);
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: insert a tasks.
 *      tags: [Tasks]
 */

router.post('/tasks', _tasks.saveTask);
/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Delete as specific task.
 *      tags: [Tasks]
 */

router["delete"]('/tasks/:id', _tasks.delelteTask);
/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update a specific task.
 *      tags: [Tasks]
 */

router.put('/tasks/:id', _tasks.updateTask);
router.post('/users/:id', _tasks.getTask);
var _default = router;
exports["default"] = _default;