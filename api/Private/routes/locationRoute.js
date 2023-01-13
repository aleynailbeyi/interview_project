/* eslint-disable max-len */
import express from 'express';
import LocationController from '../controllers/locationController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';

const app = express();

app.get('/getLocation', [ checkAuth, roleBaseFunction.roleBase(1) ], LocationController.getLocation);

module.exports = app;