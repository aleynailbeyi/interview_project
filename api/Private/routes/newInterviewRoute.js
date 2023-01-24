/* eslint-disable max-len */
import express from 'express';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';
import newInterviewController from '../controllers/newInterviewController';
import upload from '../../middleware/upload';

const app = express();

app.post('/createNewInterview', [ checkAuth, roleBaseFunction.roleBase(8) ], newInterviewController.createNewInterview);
app.get('/getNewInterview', [ checkAuth, roleBaseFunction.roleBase(1) ], newInterviewController.getNewInterview);
app.post('/confirmNewInterview', [ checkAuth, roleBaseFunction.roleBase(1), upload ], newInterviewController.confirmNewInterview);
app.put('/refuseNewInterview/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], newInterviewController.refuseNewInterview);

module.exports = app;