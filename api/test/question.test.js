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

describe('Questions', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('aleyna@gmail.com', '123456');
	});
	it('should get questions', (done) => {
		chai.request(app)
			.get('/private/v1/question/getQuestion')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				expect(res.body.data);
				res.body.should.be.a('object');
				res.body.should.have.property('message').eql('Questions get.');
				done();
			});
	});
	it('should delete question', (done) => {
		chai.request(app)
			.delete(`/private/v1/question/deleteQuestion/${id}`)
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Question deleted');
				done();
			});
	});
	
});