import express from 'express';
import questionController from '../controllers/questionController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createQuestion', [ checkAuth, roleBaseFunction.roleBase(3) ], questionController.createQuestion);
app.get('/getQuestion', [ checkAuth, roleBaseFunction.roleBase(3) ], questionController.getQuestion);
app.delete('/deleteQuestion/:id', [ checkAuth, roleBaseFunction.roleBase(3) ], questionController.deleteQuestion);

module.exports = app;