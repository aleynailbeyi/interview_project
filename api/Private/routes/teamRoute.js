import express from 'express';
import teamController from '../controllers/teamController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createTeam', [ checkAuth, roleBaseFunction.roleBase(1) ], teamController.createTeam);

module.exports = app;