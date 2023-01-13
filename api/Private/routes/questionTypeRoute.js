/* eslint-disable max-len */
import express from 'express';
import questionTypeController from '../controllers/questionTypeController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.get('/getQuestionType', [ checkAuth, roleBaseFunction.roleBase(1) ], questionTypeController.getQuestionType);

module.exports = app;