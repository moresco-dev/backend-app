"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users");

var router = (0, _express.Router)();
router.get('/usrs', _users.getUsers);
router.post('/usrs/:id', _users.getUserById);
router.post('usrs/login', _users.login);
var _default = router;
exports["default"] = _default;