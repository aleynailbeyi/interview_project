/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import tokenTest from '../helpers/token.test';

chai.use(chaiHttp);
chai.should();
let tokenUser;
let expect = chai.expect;
const id = 1;

describe('Surveys', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('aleyna@gmail.com', '123456');
	});
	it('should create survey', (done) => {
		chai.request(app)
			.post('/private/v1/survey/createSurvey')
			.set('Authorization', tokenUser)
			.send({
				'name': 'test',
				'Questions': [
					{
						'text': 'test',
						'type_id': 1,
						'Choices': [
							{
								'name': 'test'
							}
						]
					}
				]
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Surveys created.');
				done();
			});
	});
	it('should get surveys', (done) => {
		chai.request(app)
			.get('/private/v1/survey/getSurveys')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				expect(res.body.data);
				res.body.should.be.a('object');
				res.body.should.have.property('message').eql('Surveys get all');
				done();
			});
	});
	it('should delete survey', (done) => {
		chai.request(app)
			.delete(`/private/v1/survey/deleteSurvey/${id}`)
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('survey deleted');
				done();
			});
	});
	
});