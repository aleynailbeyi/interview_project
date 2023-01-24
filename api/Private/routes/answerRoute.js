import express from 'express';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';
import answerController from '../controllers/answerController';

const app = express();

app.post('/createAnswer', [ checkAuth, roleBaseFunction.roleBase(1) ], answerController.createAnswer);
app.get('/getAnswerById/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], answerController.getAnswerById);

module.exports = app;