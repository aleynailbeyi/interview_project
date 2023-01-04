import express from 'express';
import interviewController from '../controllers/interviewController';
import checkAuth from '../../middleware/checkAuth';
import roleBaseFunction from '../../middleware/roleBase';
import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
	  const originalFileName = file.originalname.split('.')[0];
	  const ext = file.originalname.split('.')[1];
	  cb(null, originalFileName + '-' + uniqueSuffix + '.' + ext);
	}
});

const upload = multer({ storage }).single('file');
const app = express();

app.post('/createInterview', upload, function (req, res) {
	console.log('req.file --> ', req.file);
	console.log('req.body --> ', req.body);
	return res.json({type: true});
});

app.post('/createInterview', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.createInterview);
app.post('/completeInterview', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.completeInterview);
app.get('/getAllInterview', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.getAllInterview);
app.get('/getInterviewById/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.getInterviewById);
app.delete('/deleteInterview/:id', [ checkAuth, roleBaseFunction.roleBase(1) ], interviewController.deleteInterview);

module.exports = app;