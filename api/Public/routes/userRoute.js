import express from 'express';
import userController from '../controllers/userController';

const app = express();

app.post('/register', userController.userRegister);
app.post('/login', userController.userLogin);

module.exports = app;