import express from 'express';
import interviewController from '../controllers/interviewController';
import checkAuth from '../../middleware/checkAuth';
import {roleBase} from '../../middleware/roleBase';

const app = express();

app.post('/createInterview', roleBase(1), checkAuth, interviewController.createInterview);

module.exports = app;