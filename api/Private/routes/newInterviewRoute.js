/* eslint-disable max-len */
import express from 'express';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';
import newInterviewController from '../controllers/newInterviewController';

const app = express();

app.post('/createNewInterview', [ checkAuth, roleBaseFunction.roleBase(1) ], newInterviewController.createNewInterview);
app.get('/getNewInterview', [ checkAuth, roleBaseFunction.roleBase(1) ], newInterviewController.getNewInterview);
app.delete('/deleteNewInterview/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], newInterviewController.deleteNewInterview);

module.exports = app;