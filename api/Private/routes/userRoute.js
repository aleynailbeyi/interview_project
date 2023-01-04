import express from 'express';
import userController from '../controllers/userController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createUser', [ checkAuth, roleBaseFunction.roleBase(2) ], userController.createUser);

module.exports = app;