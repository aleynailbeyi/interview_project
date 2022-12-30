import express from 'express';
import http from 'http';
import parser from 'body-parser';
import pb from './Public';
import pr from './Private';

const app = express();

const server = http.createServer(app);

app.get('/health', (req, res) => {
	return res.json({
		type: true,
		message: 'System is healthy'
	});
});

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/public', pb);
app.use('/private', pr);

server.listen(3000, () => {
	console.log('This is root');
});

export default server;