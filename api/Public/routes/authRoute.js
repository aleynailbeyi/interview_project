import express from 'express';
import authController from '../controllers/authController';

const app = express();

app.post('/register', authController.userRegister);
app.post('/login', authController.userLogin);

module.exports = app;