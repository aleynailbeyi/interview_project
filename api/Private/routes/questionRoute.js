import express from 'express';
import questionController from '../controllers/questionController';
import checkAuth from '../../middleware/checkAuth';
import {roleBase} from '../../middleware/roleBase';

const app = express();

app.post('/createQuestion', checkAuth, questionController.createQuestion);

module.exports = app;