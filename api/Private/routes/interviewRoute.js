import express from 'express';
import interviewController from '../controllers/interviewController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createInterview',  [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.createInterview);
app.post('/completeInterview',  checkAuth, interviewController.completeInterview);
app.get('/getAllInterview',  checkAuth, interviewController.getAllInterview);
app.delete('/deleteInterview/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.deleteInterview);

module.exports = app;