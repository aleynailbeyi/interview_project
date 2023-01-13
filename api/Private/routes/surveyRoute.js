import express from 'express';
import SurveyController from '../controllers/SurveyController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.post('/createSurvey', [ checkAuth, roleBaseFunction.roleBase(1) ], SurveyController.createSurvey);
app.get('/getSurveys', [ checkAuth, roleBaseFunction.roleBase(1) ], SurveyController.getSurveys);
app.get('/getSurveyById/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], SurveyController.getSurveyById);
app.delete('/deleteSurvey/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], SurveyController.deleteSurvey);

module.exports = app;