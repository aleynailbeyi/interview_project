import express from 'express';
import answerController from '../controllers/answerController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createAnswer', [ checkAuth, roleBaseFunction.roleBase(1) ], answerController.createAnswer);

module.exports = app;