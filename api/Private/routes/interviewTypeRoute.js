/* eslint-disable max-len */
import express from 'express';
import interviewTypeController from '../controllers/interviewTypeController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.get('/getInterviewType', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewTypeController.getInterviewType);

module.exports = app;