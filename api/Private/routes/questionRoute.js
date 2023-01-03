import express from 'express';
import questionController from '../controllers/questionController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createQuestion', [ checkAuth, roleBaseFunction.roleBase(1) ], questionController.createQuestion);

module.exports = app;