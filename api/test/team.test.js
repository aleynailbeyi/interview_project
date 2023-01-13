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

describe('Teams', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('aleyna@gmail.com', '123456');
	});
	it('should create team', (done) => {
		chai.request(app)
			.post('/private/v1/team/createTeam')
			.set('Authorization', tokenUser)
			.send({
				'team_name': 'Backend Team',
				'team_manager': 'Burak Yılmazer'
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				expect(res.body.data);
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Successfully. Team created.');
				done();
			});
	});
	it('should get team', (done) => {
		chai.request(app)
			.get('/private/v1/team/getTeam')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				expect(res.body.data);
				res.body.should.be.a('object');
				res.body.should.have.property('message').eql('Successfully. Team get');
				done();
			});
	});
	it('should delete team', (done) => {
		chai.request(app)
			.delete(`/private/v1/team/deleteTeam/${id}`)
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Team deleted');
				done();
			});
	});
	
});