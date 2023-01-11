import express from 'express';
import teamController from '../controllers/teamController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createTeam', [ checkAuth, roleBaseFunction.roleBase(1) ], teamController.createTeam);
app.get('/getTeam', [ checkAuth, roleBaseFunction.roleBase(1) ], teamController.getTeam);
app.delete('/deleteTeam/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], teamController.deleteTeam);

module.exports = app;