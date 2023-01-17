import express from 'express';
import interviewController from '../controllers/interviewController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';
import upload from '../../middleware/upload';

const app = express();

app.post('/createInterview', [ checkAuth, roleBaseFunction.roleBase(1), upload ], interviewController.createInterview);
app.get('/downloadPDF/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.downloadPDF);
app.put('/completeInterview/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.completeInterview);
app.get('/getAllInterview', checkAuth, interviewController.getAllInterview);
app.get('/getInterviewById/:id', checkAuth, interviewController.getInterviewById);
app.delete('/deleteInterview/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.deleteInterview);

module.exports = app;