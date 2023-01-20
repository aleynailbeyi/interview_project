/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('Create User', () => {
  
	it('should create user', (done) => {
		chai.request(app)
	 		.post('/public/v1/auth/register')
	 		.send({
				'firstName': 'test',
				'lastName': 'test',
				'email': 'test@gmail.com',
				'password': 'test'
			})
	 		.end((err, res) => {
				if (err) {
					done(err);
				}
				res.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
});

describe('Login User', () => {
	it('should login user', (done) => {
		chai.request(app)
	 		.post('/public/v1/auth/login')
	 		.send({
				'email': 'test@gmail.com',
    			'password': 'test'
			})
	 		.end((err, res) => {
				if (err) {
					done(err);
				}
				res.should.have.status(200);
				res.body.should.have.property('message').eql('Giriş Başarılı!');
				res.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
});