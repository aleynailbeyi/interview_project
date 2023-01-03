import express from 'express';
import positionController from '../controllers/positionController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createPosition', [ checkAuth, roleBaseFunction.roleBase(1) ], positionController.createPosition);

module.exports = app;