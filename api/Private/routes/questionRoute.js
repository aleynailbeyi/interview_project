import express from 'express';
import questionController from '../controllers/questionController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.get('/getQuestion', [ checkAuth, roleBaseFunction.roleBase(1) ], questionController.getQuestion);
app.delete('/deleteQuestion/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], questionController.deleteQuestion);

module.exports = app;