/* eslint-disable max-len */
import express from 'express';
import interviewStatusesController from '../controllers/interviewStatusesController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.get('/getInterviewStatuses', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewStatusesController.getInterviewStatuses);

module.exports = app;